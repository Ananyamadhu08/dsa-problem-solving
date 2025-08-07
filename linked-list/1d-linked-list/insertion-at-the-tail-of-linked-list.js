// Given the head of a singly linked list and a value X, insert a node with value X at the tail and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function insertAtTail(head, X) {
  const newNode = new Node(X); // create the new node

  // If the list is empty, return the new node as head
  if (head === null) {
    return newNode;
  }

  // Traverse to the end of the list
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode; // attach the new node at the end

  return head; // return the original head
}

const numArr = [1, 2, 3];

const X = 7;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = insertAtTail(head, X);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
