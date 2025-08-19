// Given the head of a singly linked list containing integers, reverse the nodes of the list in groups of k and return the head of the modified list. If the number of nodes is not a multiple of k, then the remaining nodes at the end should be kept as is and not reversed. Do not change the values of the nodes, only change the links between nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Helper to reverse a whole linked-list segment [head..null]; returns the new head of that segment
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next; // remember the next node
    curr.next = prev; // reverse the pointer
    prev = curr; // move prev forward
    curr = next; // move curr forward
  }

  return prev; // new head of the reversed segment
}

function reverseKGroupOptimal(head, k) {
  if (head === null || k <= 1) return head;

  const dummy = new Node(0, head);

  let start = dummy; // node before the current k-block
  let end = dummy; // will advance to point at the end of the k-block

  while (true) {
    // Try to move 'end' k steps ahead to locate a full block
    for (let i = 0; i < k && end; i++) {
      end = end.next;
    }

    if (!end) break; // fewer than k nodes remain → stop

    const startNode = start.next; // first node of the k-block
    const nextNode = end.next; // first node AFTER the k-block

    end.next = null; // cut the block [startNode..end]

    const newHead = reverseList(startNode); // reverse the isolated block

    // Stitch the reversed block back into the main list
    start.next = newHead;
    startNode.next = nextNode; // startNode is now the tail of the reversed block

    // Move 'start' and 'end' to the tail we just placed, to prep for next block
    start = startNode;
    end = start;
  }

  return dummy.next;
}

const numArr = [1, 2, 3, 4, 5];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = reverseKGroupOptimal(head, 2);

console.log(result);

// Time complexity: O(n) | each node is visited and rewired a constant number of times
// Space complexity: O(1) | in-place pointer manipulation (reverseList is iterative)
