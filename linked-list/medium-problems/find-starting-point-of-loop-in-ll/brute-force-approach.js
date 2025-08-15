// Given the head of a singly linked list, the task is to find the starting point of a loop in the linked list if it exists. Return the starting node if a loop exists; otherwise, return null. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos denotes the index (0-based) of the node from where the loop starts. Note that pos is not passed as a parameter.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Brute force using a Set to remember visited node references. The first node we encounter that's already in the Set is the loop's start.
function findStartingPointOfLoopInLL(head) {
  const seen = new Set(); // stores node references we've already visited

  let currentNode = head;

  while (currentNode !== null) {
    // If current node is already in the set, it's the start of the loop
    if (seen.has(currentNode)) return currentNode;

    // Mark current node as visited and advance
    seen.add(currentNode);

    currentNode = currentNode.next;
  }

  // Reached null no loop
  return null;
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

console.log(findStartingPointOfLoopInLL(head));

// Time complexity: O(n)
// Space complexity: O(n)
