// Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. The task is to add one to the value represented by the linked list and return the head of a linked list containing the final value. The number will contain no leading zeroes except when the value represented is zero itself.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addOneToNumber(head) {
  if (head === null) return new Node(1); // Empty list represents 0 → return [1]

  // Convert linked list digits into a string (e.g., 1->2->3 => "123")
  let numberStr = "";

  let current = head;

  while (current !== null) {
    numberStr += current.value;
    current = current.next;
  }

  // Use BigInt to safely add 1 (works for arbitrarily large numbers)
  const sumStr = (BigInt(numberStr) + 1n).toString();

  // Build a new linked list from the resulting string
  const dummy = new Node(0);
  let builder = dummy; // pointer to build the new list

  for (const digitChar of sumStr) {
    builder.next = new Node(Number(digitChar));
    builder = builder.next;
  }

  return dummy.next; // return the real head
}

const numArr = [1, 2, 3];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = addOneToNumber(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
