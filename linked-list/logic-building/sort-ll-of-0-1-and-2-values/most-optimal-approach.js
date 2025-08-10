// Given the head of a singly linked list consisting of only 0, 1, or 2, sort the linked list in non-decreasing order by relinking existing nodes (no new nodes created).

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sortList(head) {
  if (head === null || head.next === null) return head; // Empty or single-node list

  // Heads and tails for the three partitions
  let zeroHead = null,
    zeroTail = null; // 0s

  let oneHead = null,
    oneTail = null; // 1s

  let twoHead = null,
    twoTail = null; // 2s

  let current = head;

  // Partition the nodes into three separate linked lists based on their value
  while (current !== null) {
    const nextNode = current.next; // store next node

    current.next = null; // detach current node

    if (current.value === 0) {
      if (!zeroHead) {
        zeroHead = zeroTail = current;
      } else {
        zeroTail.next = current;
        zeroTail = current;
      }
    } else if (current.value === 1) {
      if (!oneHead) {
        oneHead = oneTail = current;
      } else {
        oneTail.next = current;
        oneTail = current;
      }
    } else {
      if (!twoHead) {
        twoHead = twoTail = current;
      } else {
        twoTail.next = current;
        twoTail = current;
      }
    }

    current = nextNode;
  }

  // Stitch the three lists together: 0s -> 1s -> 2s
  if (zeroTail) zeroTail.next = oneHead ? oneHead : twoHead; // 0s tail → 1s head or 2s head
  if (oneTail) oneTail.next = twoHead; // 1s tail → 2s head

  // Determine the new head
  const newHead = zeroHead || oneHead || twoHead;

  return newHead;
}

const numArr = [1, 0, 2, 0, 1];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = sortList(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
