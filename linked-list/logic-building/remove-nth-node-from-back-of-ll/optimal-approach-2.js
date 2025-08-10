// Given the head of a singly linked list and an integer n, remove the nth node from the back of the list and return the modified head.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function removeNthFromEnd(head, n) {
  const dummy = new Node(0, head);

  let fast = dummy;
  let slow = dummy;

  // Advance fast by n steps to create a gap of n nodes
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast is at the last node then slow will be just before the target node
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next ? slow.next.next : null;

  return dummy.next;
}

const numArr = [1, 2, 3, 4, 5];

const n = 2;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = removeNthFromEnd(head, n);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
