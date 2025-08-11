// Given the head of a singly linked list. Reverse the given linked list and return the head of the modified list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  if (head === null || head.next === null) return head; // Empty or single-node list

  // Store all nodes in an array
  const stack = [];

  let current = head;

  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  // Pop nodes from stack to rebuild reversed links
  const newHead = stack.pop();

  let previous = newHead;

  while (stack.length > 0) {
    const node = stack.pop();
    previous.next = node;
    previous = node;
  }

  // Set last node's next to null
  previous.next = null;

  return newHead;
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = reverseList(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
