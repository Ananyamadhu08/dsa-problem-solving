// Given the head of a doubly linked list and an integer k, delete the kth node (1-indexed) and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function deleteKthNode(head, k) {
  if (head === null || k <= 0) return head;

  // Deleting the head node
  if (k === 1) {
    let newHead = head.next;
    if (newHead) newHead.prev = null;
    return newHead;
  }

  let current = head;
  let position = 1;

  // Traverse to the kth node
  while (current !== null && position < k) {
    current = current.next;
    position++;
  }

  if (current === null) return head; // k is out of bounds

  // Rewire the pointers to remove the kth node
  const prevNode = current.prev;
  const nextNode = current.next;

  if (prevNode) prevNode.next = nextNode;
  if (nextNode) nextNode.prev = prevNode;

  return head;
}

const numArr = [2, 5, 7, 9];

const k = 2;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = deleteKthNode(head, k);

console.log(result);

// Time complexity: O(k)
// Space complexity: O(1)
