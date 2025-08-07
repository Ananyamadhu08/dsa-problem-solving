// Given the head of a singly linked list and two integers X and K, insert a node with value X as the Kth node of the linked list and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function insertAtKthPosition(head, X, K) {
  const newNode = new Node(X);

  // Insert at head
  if (K === 1) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let position = 1;

  // Traverse to the (K - 1)th node
  while (position < K - 1 && current !== null) {
    current = current.next;
    position++;
  }

  // If K is out of bounds, return original head
  if (current === null) return head;

  // Insert new node
  newNode.next = current.next;
  current.next = newNode;

  return head;
}

const numArr = [1, 2, 3];

const X = 5;

const K = 2;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = insertAtKthPosition(head, X, K);

console.log(result);

// Time complexity: O(K)
// Space complexity: O(1)
