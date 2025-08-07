// Given the head of a doubly linked list and an integer X, insert a node with value X before the tail and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function insertBeforeTail(head, X) {
  const newNode = new Node(X);

  // Empty list
  if (head === null) return newNode;

  // Only one node in the list
  if (head.next === null) {
    newNode.next = head;
    head.prev = newNode;
    return newNode; // new head
  }

  // Traverse to the tail
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  // Current is now the tail
  const prevNode = current.prev;

  // Insert newNode between prevNode and current
  prevNode.next = newNode;
  newNode.prev = prevNode;
  newNode.next = current;
  current.prev = newNode;

  return head;
}

const numArr = [1, 2, 4];

const X = 3;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = insertBeforeTail(head, X);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
