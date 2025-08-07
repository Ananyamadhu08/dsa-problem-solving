// Given the head of a singly linked list and two integers X and val, insert a node with value `val` before the node with value `X` in the linked list and return the modified head. If X is not found, return the original list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function insertBeforeX(head, X, val) {
  // If list is empty, nothing to insert before
  if (head === null) return head;

  const newNode = new Node(val); // create the new node to be inserted

  // If X is at the head, insert at the beginning
  if (head.value === X) {
    newNode.next = head;
    return newNode;
  }

  // Traverse the list to find the node before X
  let current = head;

  while (current.next !== null && current.next.value !== X) {
    current = current.next;
  }

  // If X is found, insert before it
  if (current.next !== null) {
    newNode.next = current.next;
    current.next = newNode;
  }

  // If X is not found, return the original head
  return head;
}

const numArr = [1, 2, 3];

const X = 2;

const val = 5;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = insertBeforeX(head, X, val);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
