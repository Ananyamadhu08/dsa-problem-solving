// Given the head of a non-empty singly linked list containing integers, delete the middle node of the linked list. Return the head of the modified linked list. The middle node of a linked list of size n is the (⌊n / 2⌋ + 1)th node from the start using 1-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function deleteMiddleNode(head) {
  // If list has only one node, deleting middle leaves empty list
  if (head === null || head.next === null) return null;

  const dummy = new Node(0, head);

  let slow = dummy; // stops at node before middle
  let fast = dummy;

  // When this loop finishes, slow.next is the middle
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Remove the middle
  slow.next = slow.next.next;

  return dummy.next; // real head
}

const numArr = [1, 2, 3, 4, 5];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteMiddleNode(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
