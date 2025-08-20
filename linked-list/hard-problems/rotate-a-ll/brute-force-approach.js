// Given the head of a singly linked list containing integers, shift the elements of the linked list to the right by k places and return the head of the modified list. Do not change the values of the nodes, only change the links between nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function moveLastToFront(head) {
  let prev = null;
  let curr = head;

  // Traverse to the last node
  while (curr.next) {
    prev = curr;
    curr = curr.next;
  }

  // curr is last, prev is second-last
  prev.next = null; // detach last node
  curr.next = head; // link last node to old head
  return curr; // new head is the old last
}

// Perform 1 right shift, k times. Each single shift moves the last node to become the new head.
function rotateLL(head, k) {
  if (!head || !head.next || k === 0) return head; // nothing to do

  // Repeat k times (inefficient if k is large)
  for (let i = 0; i < k; i++) {
    head = moveLastToFront(head);
  }

  return head;
}

const numArr = [1, 2, 3, 4, 5];

const k = 2;

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = rotateLL(head, k);
console.log(result);

// Time complexity: O(k * n) | for each of the k shifts, we walk through the list (O(n))
// Space complexity: O(1) | only constant extra pointers used
