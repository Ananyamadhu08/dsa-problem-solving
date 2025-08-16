// Given the head of a singly linked list, the task is to find the starting point of a loop in the linked list if it exists. Return the starting node if a loop exists; otherwise, return null. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos denotes the index (0-based) of the node from where the loop starts. Note that pos is not passed as a parameter.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* Floyd's Tortoise and Hare to find the entry point of the cycle in O(1) space. */
function findStartingPointOfLoopInLL(head) {
  if (head === null || head.next === null) return null; // empty or single (no self-loop) → no entry

  // 1) Detect if a cycle exists and find the meeting point inside the cycle
  let slow = head; // moves 1 step at a time
  let fast = head; // moves 2 steps at a time
  let hasCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // move 1 step
    fast = fast.next.next; // move 2 steps

    if (slow === fast) {
      // pointers met → cycle detected
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) return null; // fast hit null → no loop

  // 2) Find entry point: reset slow to head, move both 1 step at a time
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow (or fast) is now at the start of the loop
  return slow;
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
