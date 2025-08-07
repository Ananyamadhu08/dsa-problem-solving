// Given the head of a doubly linked list and two integers X and K, insert a new node with value X before the Kth node and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function insertBeforeK(head, X, K) {
  const newNode = new Node(X);

  // Case 1: Insert before the head (K = 1)
  if (K === 1) {
    newNode.next = head;
    if (head !== null) head.prev = newNode;
    return newNode;
  }

  let current = head;
  let position = 1;

  // Traverse to the Kth node
  while (current !== null && position < K) {
    current = current.next;
    position++;
  }

  // Insert before Kth node
  const prevNode = current.prev;

  prevNode.next = newNode;
  newNode.prev = prevNode;

  newNode.next = current;
  current.prev = newNode;

  return head;
}

// Test Case
const numArr = [1, 3, 5];
const X = 7;
const K = 2;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = insertBeforeK(head, X, K);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
