// Given the head of a singly linked list consisting of only 0, 1, or 2, sort the linked list in non-decreasing order by relinking existing nodes (no new nodes created).

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sort012(head) {
  // Edge cases: empty list or single node -> already "sorted"
  if (head === null || head.next === null) return head;

  // Collect pointers to all nodes in an array (we will NOT create new nodes)
  const nodes = [];

  let current = head;

  while (current !== null) {
    nodes.push(current);
    current = current.next;
  }

  // Sort the array of node references by their value (0, 1, 2)
  nodes.sort((a, b) => a.value - b.value);

  // Relink nodes in the sorted order
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  nodes[nodes.length - 1].next = null;

  // Return the new head (first node in the sorted array)
  return nodes[0];
}

const numArr = [1, 0, 2, 0, 1];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}
const result = sort012(head);

console.log(result);

// Time complexity: O(n log n)
// Space complexity: O(n)
