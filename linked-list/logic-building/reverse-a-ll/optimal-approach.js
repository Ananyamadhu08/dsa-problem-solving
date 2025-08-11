// Given the head of a singly linked list. Reverse the given linked list and return the head of the modified list.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseList(head) {
  let previous = null;

  let current = head;

  while (current !== null) {
    // Save the next node before breaking the link
    const nextNode = current.next;

    // Reverse the pointer: make current point to previous
    current.next = previous;

    // Move previous and current one step forward
    previous = current;

    current = nextNode;
  }

  // At the end, previous will be the new head
  return previous;
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = reverseList(head);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
