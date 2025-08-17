// Given the head of a singly linked list, find the length of the loop in the linked list if it exists. Return the length of the loop if it exists; otherwise, return 0. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos is used to denote the index (0-based) of the node from where the loop starts.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLengthOfLoop(head) {
  if (head === null) return 0;

  let slow = head;
  let fast = head;

  // Detect if a cycle exists (find meeting point)
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // move 1 step
    fast = fast.next.next; // move 2 steps

    if (slow === fast) {
      // Count cycle length by walking a full loop
      let count = 1;
      let start = slow.next;

      while (start !== slow) {
        count++;
        start = start.next;
      }

      return count;
    }
  }

  // No cycle
  return 0;
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

const result = findLengthOfLoop(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
