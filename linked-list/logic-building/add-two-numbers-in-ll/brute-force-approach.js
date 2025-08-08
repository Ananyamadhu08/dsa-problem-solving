// Given two singly linked lists representing numbers in reverse order, add the two numbers and return the sum as a reversed linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(head1, head2) {
  // Convert both linked lists to numbers (in correct order)
  let num1 = "";
  let num2 = "";

  while (head1 !== null) {
    num1 = head1.value + num1; // Prepend to build the number
    head1 = head1.next;
  }

  while (head2 !== null) {
    num2 = head2.value + num2;
    head2 = head2.next;
  }

  // Add the two numbers using BigInt to handle large sums
  const sum = BigInt(num1) + BigInt(num2);

  // Convert the sum back to a reversed linked list
  const sumStrArr = sum.toString().split("").reverse();

  const dummy = new Node(0);
  let current = dummy;

  for (let digit of sumStrArr) {
    current.next = new Node(Number(digit));
    current = current.next;
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

// Time complexity: O(n + m)
// Space complexity: O(n + m)
