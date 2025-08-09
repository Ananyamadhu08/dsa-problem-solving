// Given two singly linked lists representing numbers in reverse order,
// add the two numbers and return the sum as a reversed linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  const dummy = new Node(0); // Dummy node to simplify result list creation
  let current = dummy; // Pointer to build the new list

  let carry = 0; // Tracks carry from each addition

  // Continue until both lists are processed and no carry remains
  while (l1 !== null || l2 !== null || carry !== 0) {
    const l1Val = l1 ? l1.value : 0; // Get value from l1 or 0 if exhausted
    const l2Val = l2 ? l2.value : 0; // Get value from l2 or 0 if exhausted

    const sum = l1Val + l2Val + carry; // Add values and carry

    carry = Math.floor(sum / 10); // Compute new carry

    const digit = sum % 10; // Extract digit for the node

    current.next = new Node(digit); // Append digit to the result list
    current = current.next; // Move to the next position

    // Move to the next nodes in l1 and l2 if available
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // Return head of the new list (skipping dummy)
}

const l1Arr = [4, 5, 6]; // Represents 654 (reverse order)
const l2Arr = [1, 2, 3]; // Represents 321

// Create l1 linked list
let l1 = new Node(l1Arr[0]);
let l1Mover = l1;

for (let i = 1; i < l1Arr.length; i++) {
  let temp = new Node(l1Arr[i]);
  l1Mover.next = temp;
  l1Mover = temp;
}

// Create l2 linked list
let l2 = new Node(l2Arr[0]);
let l2Mover = l2;

for (let i = 1; i < l2Arr.length; i++) {
  let temp = new Node(l2Arr[i]);
  l2Mover.next = temp;
  l2Mover = temp;
}

const result = addTwoNumbers(l1, l2);

console.log(result);

// Time complexity: O(max(n, m))
// Space complexity: O(max(n, m))
