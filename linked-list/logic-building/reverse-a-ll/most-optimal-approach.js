// Given the head of a singly linked list. Reverse the given linked list and return the head of the modified list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseListRecursive(head) {
  // Base case: empty list or single node is already reversed
  if (head === null || head.next === null) {
    return head;
  }

  // Reverse the rest of the list recursively
  const newHead = reverseListRecursive(head.next);

  // Make the next node point back to the current node
  head.next.next = head;

  // Break the old forward link to avoid a cycle
  head.next = null;

  // Return the head of the reversed list
  return newHead;
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = reverseListRecursive(head);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
