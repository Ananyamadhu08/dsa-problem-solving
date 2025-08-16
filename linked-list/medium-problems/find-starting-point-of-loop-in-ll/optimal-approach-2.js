// Given the head of a singly linked list, the task is to find the starting point of a loop in the linked list if it exists. Return the starting node if a loop exists; otherwise, return null. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos denotes the index (0-based) of the node from where the loop starts. Note that pos is not passed as a parameter.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectMeetingNode(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // move 1 step
    fast = fast.next.next; // move 2 steps

    if (slow === fast) return slow; // met inside the cycle
  }

  return null; // no cycle
}

function findStartingPointOfLoopInLL(head) {
  if (head === null || head.next === null) return null;

  const meet = detectMeetingNode(head);

  if (meet === null) return null; // no cycle detected

  // Start one pointer at head, the other at the meeting node. Move both one step at a time, they meet at the cycle entry.
  let p1 = head;
  let p2 = meet;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1; // cycle entry
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

// Creating a loop: last node points to node with value 2
mover.next = head.next;

const result = findStartingPointOfLoopInLL(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
