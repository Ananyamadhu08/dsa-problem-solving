// Given the head of a singly linked list. Return true if a loop exists in the linked list or return false. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos is used to denote the index(0-based) of the node from where the loop starts. Note that pos is not passed as a parameter.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectLoopInLL(head) {
  const seen = new Set(); // stores node references we have already seen

  let currentNode = head;

  while (currentNode !== null) {
    // If current node is already in the set, loop exists
    if (seen.has(currentNode)) return true;

    // Add current node to the set
    seen.add(currentNode);
    currentNode = currentNode.next;
  }

  // If we reach null, no loop exists
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

const result = detectLoopInLL(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
