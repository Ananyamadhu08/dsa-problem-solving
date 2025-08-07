// Given the head of a doubly linked list and an integer X, insert a node with value X before the head and return the new head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function insertBeforeHead(head, X) {
  const newNode = new Node(X);

  // If list is empty, return new node as the head
  if (head === null) return newNode;

  // Link newNode to current head
  newNode.next = head;

  head.prev = newNode;

  // Return new node as the new head
  return newNode;
}

const numArr = [1, 2, 3];

const X = 3;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = insertBeforeHead(head, X);

console.log(result);

// Time complexity: O(1)
// Space complexity: O(1)
