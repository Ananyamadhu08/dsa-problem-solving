// Given the head of a singly linked list containing integers, reverse the nodes of the list in groups of k and return the head of the modified list. If the number of nodes is not a multiple of k, then the remaining nodes at the end should be kept as is and not reversed. Do not change the values of the nodes, only change the links between nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseKGroupInLL(head, k) {
  if (head === null || k <= 1) return head; // nothing to do

  // Compute total length so we only process full k-sized blocks
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  const dummy = new Node(0, head); // dummy helps handle head changes
  let start = dummy; // node before the current k-block

  // Process each full k-sized block using in-place head-insertion
  while (length >= k) {
    let currentNode = start.next; // first node of the block (becomes tail after reversal)
    let nextNode = currentNode.next; // node to move repeatedly to the front

    // Perform k-1 head insertions within this block
    for (let i = 1; i < k; i++) {
      // Detach nextNode from after currentNode
      currentNode.next = nextNode.next;

      // Insert nextNode at the front of the block (right after start)
      nextNode.next = start.next;
      start.next = nextNode;

      // Advance nextNode to the next candidate after currentNode
      nextNode = currentNode.next;
    }

    // Move start to the tail of the reversed block (currentNode)
    start = currentNode;
    length -= k;
  }

  return dummy.next;
}

const numArr = [1, 2, 3, 4, 5];

const k = 2;

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = reverseKGroupInLL(head, k);

console.log(result);

// Time complexity: O(n) | each node is visited and rewired a constant number of times
// Space complexity: O(1) | in-place pointer manipulation (no extra arrays/recursion)
