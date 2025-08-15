// Given the head of a singly linked list. Return true if a loop exists in the linked list or return false. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos is used to denote the index(0-based) of the node from where the loop starts. Note that pos is not passed as a parameter.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectLoopInLL(head) {
  if (head === null || head.next === null) return false; // 0 or 1 node → no loop (unless self-loop not present)

  const SENTINEL = -1; // outside [0, 10^4] per problem constraint
  let current = head;

  while (current !== null) {
    // If this node is already marked, we've visited it before → loop exists
    if (current.value === SENTINEL) return true;

    // Mark this node as visited
    current.value = SENTINEL;

    // Move to next
    current = current.next;
  }

  // Reached null without revisiting a node → no loop
  return false;
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

console.log(detectLoopInLL(head));

// Time complexity: O(n)
// Space complexity: O(1)
