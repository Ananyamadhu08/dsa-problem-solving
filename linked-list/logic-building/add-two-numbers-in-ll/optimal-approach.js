// Given two singly linked lists representing numbers in reverse order,
// add the two numbers and return the sum as a reversed linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(head1, head2) {
  const dummy = new Node(0); // Dummy node to simplify logic
  let current = dummy;

  let carry = 0;

  while (head1 !== null || head2 !== null || carry !== 0) {
    const val1 = head1 ? head1.value : 0;
    const val2 = head2 ? head2.value : 0;

    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);

    const digit = sum % 10;

    current.next = new Node(digit);
    current = current.next;

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  return dummy.next;
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
