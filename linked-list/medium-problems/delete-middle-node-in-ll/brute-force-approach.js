// Given the head of a non-empty singly linked list containing integers, delete the middle node of the linked list. Return the head of the modified linked list. The middle node of a linked list of size n is the (⌊n / 2⌋ + 1)th node from the start using 1-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteMiddleNode(head) {
  // If list has only one node, deleting middle leaves empty list
  if (head === null || head.next === null) return null;

  // Count the number of nodes
  let nodeCount = 0;
  let currentNode = head;

  while (currentNode !== null) {
    nodeCount++;
    currentNode = currentNode.next;
  }

  // Calculate middle node's zero-based index
  const midIndex = Math.floor(nodeCount / 2);

  // Move to the node just before the middle
  currentNode = head;
  let i = 0;

  while (i < midIndex - 1) {
    currentNode = currentNode.next;
    i++;
  }

  // Skip the middle node
  currentNode.next = currentNode.next.next;

  return head;
}

const numArr = [1, 2, 3, 4, 5];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteMiddleNode(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
