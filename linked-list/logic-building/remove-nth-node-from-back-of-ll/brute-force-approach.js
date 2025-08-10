// Given the head of a singly linked list and an integer n, remove the nth node from the back of the list and return the modified head.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function removeNthNode(head, n) {
  if (head === null) return null; // Empty list

  // Compute length
  let llLength = 0;

  let current = head;

  while (current !== null) {
    llLength++;
    current = current.next;
  }

  // Index (0-based) of the node to remove from the front
  const k = llLength - n;

  // Create dummy node to handle removing the head
  const dummy = new Node(0, head);

  // Move to the node before the target
  let previous = dummy;

  for (let i = 0; i < k; i++) {
    previous = previous.next;
  }

  // Remove the target node
  previous.next = previous.next ? previous.next.next : null;

  return dummy.next;
}

const numArr = [1, 2, 3, 4, 5];

const n = 3;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = removeNthNode(head, n);

console.log(result);

// Time complexity: O(n) | n is the number of nodes in the list
// Space complexity: O(1)
