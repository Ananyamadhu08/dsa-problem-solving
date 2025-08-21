// Given the head of a singly linked list. Sort the values of the linked list in non-decreasing order and return the head of the modified linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sortListBrute(head) {
  if (head === null || head.next === null) return head; // Empty or single node → already sorted

  // Collect all values into an array
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  // Sort the array
  values.sort((a, b) => a - b);

  // Write sorted values back into the linked list
  current = head;
  for (const val of values) {
    current.value = val;
    current = current.next;
  }

  return head;
}

const numArr = [5, 6, 1, 2, 1];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = sortListBrute(head);

console.log(result);

// Time complexity: O(n log n) | because of sorting
// Space complexity: O(n) | extra array to store values
