// Given the head of a singly linked list, group all the nodes with odd indices followed by the nodes with even indices, and return the reordered list. The relative order inside the odd and even groups should remain the same.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function oddEvenList(head) {
  if (head === null || head.next === null) return head; // Empty or single node list

  const oddNodes = [];
  const evenNodes = [];

  let index = 1; // 1-based index
  let current = head;

  // Split nodes into odd and even buckets
  while (current !== null) {
    if (index % 2 === 1) {
      oddNodes.push(current);
    } else {
      evenNodes.push(current);
    }
    current = current.next;
    index++;
  }

  // Reconnect odd nodes
  for (let i = 0; i < oddNodes.length - 1; i++) {
    oddNodes[i].next = oddNodes[i + 1];
  }

  // Connect odd tail to even head
  if (oddNodes.length > 0) {
    oddNodes[oddNodes.length - 1].next =
      evenNodes.length > 0 ? evenNodes[0] : null;
  }

  // Reconnect even nodes
  for (let i = 0; i < evenNodes.length - 1; i++) {
    evenNodes[i].next = evenNodes[i + 1];
  }

  // Ensure final even tail points to null
  if (evenNodes.length > 0) {
    evenNodes[evenNodes.length - 1].next = null;
  } else {
    oddNodes[oddNodes.length - 1].next = null;
  }

  return oddNodes.length > 0 ? oddNodes[0] : head;
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = oddEvenList(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
