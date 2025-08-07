// Given the head of a singly linked list and a value X, insert a node with value X at the head and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function insertAtHead(head, X) {
  const newNode = new Node(X); // create the new node

  newNode.next = head; // link it to the current head

  return newNode; // return the new node as the new head
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

const result = insertAtHead(head, X);

console.log(result);

// Time complexity: O(1)
// Space complexity: O(1)
