// Given the head of a singly Linked List, return the middle node of the Linked List. If the Linked List has an even number of nodes, return the second middle one.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(head) {
  if (head === null) return null;

  let slow = head; // moves 1 step at a time
  let fast = head; // moves 2 steps at a time

  // Loop runs while fast can move two steps. Using fast && fast.next avoids errors and makes even-length lists return the second middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // 1 step
    fast = fast.next.next; // 2 steps
  }

  return slow; // slow is at the middle (second middle if even)
}

const numArr = [3, 8, 7, 1, 3];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = middleNode(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
