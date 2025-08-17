// Given the head of a singly linked list, find the length of the loop in the linked list if it exists. Return the length of the loop if it exists; otherwise, return 0. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos is used to denote the index (0-based) of the node from where the loop starts.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLengthOfLoop(head) {
  const seen = new Set();
  let current = head;

  while (current !== null) {
    // If we've seen this node before → cycle detected
    if (seen.has(current)) {
      const loopEntry = current;
      let length = 1;
      let start = loopEntry.next;

      // Count how many nodes until we come back to loopEntry
      while (start !== loopEntry) {
        length++;
        start = start.next;
      }

      return length;
    }

    seen.add(current);
    current = current.next;
  }

  // No cycle found
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

console.log(findLengthOfLoop(head));

// Time complexity: O(n)
// Space complexity: O(n)
