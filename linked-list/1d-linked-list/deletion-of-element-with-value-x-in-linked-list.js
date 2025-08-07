// Given the head of a singly linked list and a value X, delete the node with value X and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNodeWithValue(head, X) {
  if (head === null) return null; // Empty list

  // Special case: if head itself has value X
  if (head.value === X) return head.next;

  let current = head;

  // Traverse the list to find the node just before the one we want to delete
  while (current !== null && current.next !== null) {
    if (current.next.value === X) {
      current.next = current.next.next; // Skip the node with value X
      return head;
    }

    current = current.next;
  }

  return head; // X was not found, return original head
}

const numArr = [3, 4, 5];

const X = 4;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteNodeWithValue(head, X);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
