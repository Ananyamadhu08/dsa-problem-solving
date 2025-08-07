// Given the head of a singly linked list and an integer k, delete the kth node and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteKthNode(head, k) {
  if (head === null) return null; // Empty list

  if (k === 1) return head.next; // Special case: delete the head

  let current = head;
  let count = 1;

  // Traverse to the (k-1)th node
  while (current !== null && count < k - 1) {
    current = current.next;
    count++;
  }

  // Skip the kth node
  if (current !== null && current.next !== null) {
    current.next = current.next.next;
  }

  return head;
}

const numArr = [3, 4, 5];
const k = 2;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = deleteKthNode(head, k);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
