// Given the head of a non-empty singly linked list containing integers, delete the middle node of the linked list. Return the head of the modified linked list. The middle node of a linked list of size n is the (⌊n / 2⌋ + 1)th node from the start using 1-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// One-pass approach using fast and slow pointers
function deleteMiddleNode(head) {
  // If list has only one node, deleting middle leaves empty list
  if (head === null || head.next === null) return null;

  let slow = head; // moves one step at a time
  let fast = head; // moves two steps at a time
  let prev = null; // node before slow

  // Advance fast by 2 and slow by 1 until fast reaches the end
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Skip the middle node
  prev.next = slow.next;

  return head;
}

const numArr = [1, 2, 3, 4, 5];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteMiddleNode(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
