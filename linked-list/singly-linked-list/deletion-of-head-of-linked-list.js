// Given the head of a singly linked list, delete the head and return the new head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteHead(head) {
  if (head === null) return null; // Empty list

  return head.next; // New head after deletion
}

const numArr = [1, 2, 3];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteHead(head);

console.log(result);

// Time complexity: O(1)
// Space complexity: O(1)
