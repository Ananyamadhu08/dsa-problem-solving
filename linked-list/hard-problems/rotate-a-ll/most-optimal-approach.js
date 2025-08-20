// Given the head of a singly linked list containing integers, shift the elements of the linked list to the right by k places and return the head of the modified list. Do not change the values of the nodes, only change the links between nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function rotateLL(head, k) {
  if (head === null || head.next === null || k === 0) return head; // nothing to do

  // find length and tail
  let length = 1;
  let tail = head;

  while (tail.next !== null) {
    length++;
    tail = tail.next;
  }

  // reduce k so we only perform the effective rotation
  k = k % length;

  if (k === 0) return head;

  // make the list circular
  tail.next = head;

  // two pointers: fast starts k steps ahead of slow
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  // move both until fast is at the tail (i.e., fast.next points back to original head)
  while (fast.next !== head) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow is the new tail; the next node is the new head
  const newHead = slow.next;

  // break the circle to restore a linear list
  slow.next = null;

  return newHead;
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

// Time complexity: O(n) | single pass to get length/tail + linear walk to align pointers and cut
// Space complexity: O(1) | constant extra pointers (slow/fast/tail)
