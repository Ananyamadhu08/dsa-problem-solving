// Given the head of a singly Linked List, return the middle node of the Linked List. If the Linked List has an even number of nodes, return the second middle one.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleNodeOfLL(head) {
  if (head === null) return null;

  // count number of nodes
  let n = 0;
  let currentNode = head;

  while (currentNode !== null) {
    n += 1;
    currentNode = currentNode.next;
  }

  // Target 0-based index for second middle is floor(n/2)
  const targetIndex = Math.floor(n / 2);

  // Second pass: walk to targetIndex
  currentNode = head;
  let i = 0;

  while (i < targetIndex) {
    currentNode = currentNode.next;
    i += 1;
  }

  return currentNode; // middle node (second middle if even length)
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = findMiddleNodeOfLL(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
