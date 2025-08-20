// Given the head of a singly linked list containing integers, shift the elements of the linked list to the right by k places and return the head of the modified list. Do not change the values of the nodes, only change the links between nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function rotateLL(head, k) {
  if (head === null || head.next === null || k === 0) return head;

  // find the length of the list and the tail node
  let length = 1;
  let tail = head;

  while (tail.next !== null) {
    length++;
    tail = tail.next;
  }

  // reduce k so we only rotate the effective number of times
  k = k % length;

  if (k === 0) return head;

  // temporarily make the list circular
  tail.next = head;

  // walk (length - k - 1) steps to find the new tail
  const stepsToNewTail = length - k - 1;

  let newTail = head;

  for (let i = 0; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  // the node after newTail becomes the new head
  const newHead = newTail.next;

  // break the circle to restore linear list
  newTail.next = null;

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

// Time complexity: O(n) | traverse list once to get length/tail, again to locate newTail
// Space complexity: O(1) | constant extra pointers
