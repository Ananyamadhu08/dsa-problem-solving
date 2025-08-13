// Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. The task is to add one to the value represented by the linked list and return the head of a linked list containing the final value. The number will contain no leading zeroes except when the value represented is zero itself.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addOneMostOptimal(head) {
  if (head === null) return new Node(1); // Empty list represents 0 -> return [1]

  let lastNonNine = null;
  let current = head;

  // Find the rightmost node whose value is not 9
  while (current !== null) {
    if (current.value !== 9) {
      lastNonNine = current;
    }
    current = current.next;
  }

  // If all digits were 9s: prepend 1 and set all existing nodes to 0
  if (lastNonNine === null) {
    const newHead = new Node(1);
    newHead.next = head;

    current = head;
    while (current !== null) {
      current.value = 0;
      current = current.next;
    }

    return newHead;
  }

  // Otherwise, increment lastNonNine and zero out the suffix after it
  lastNonNine.value += 1;

  current = lastNonNine.next;
  while (current !== null) {
    current.value = 0;
    current = current.next;
  }

  return head;
}

const numArr = [1, 2, 3];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = addOne(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
