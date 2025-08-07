// Given the head of a singly linked list, delete the tail and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteTail(head) {
  if (head === null || head.next === null) return null; // Empty or single-node list

  let current = head;

  // Traverse until the second-last node
  while (current.next.next !== null) {
    current = current.next;
  }

  current.next = null; // Remove the last node

  return head;
}

const numArr = [1, 2, 3];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteTail(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
