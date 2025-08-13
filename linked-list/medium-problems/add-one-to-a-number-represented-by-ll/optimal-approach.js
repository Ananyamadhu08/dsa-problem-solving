// Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. The task is to add one to the value represented by the linked list and return the head of a linked list containing the final value. The number will contain no leading zeroes except when the value represented is zero itself.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addOne(head) {
  if (head === null) return new Node(1); // Empty list represents 0 -> return [1]

  // Reverse the linked list
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    const nextNode = currentNode.next; // does not change within this iteration
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  head = prevNode;
  currentNode = head;

  // Add one with carry
  let carry = 1;

  while (currentNode) {
    const sum = currentNode.value + carry; // sum for this node this iteration
    const digit = sum % 10; // store remainder in variable 'digit'

    carry = Math.floor(sum / 10);

    currentNode.value = digit;

    // If we're at the tail and still have a carry, append a new node
    if (!currentNode.next && carry) {
      currentNode.next = new Node(carry);
      carry = 0;
      break;
    }

    currentNode = currentNode.next;
  }

  // Reverse again to restore original left-to-right order
  prevNode = null;
  currentNode = head;

  while (currentNode) {
    const nextNode = currentNode.next; // does not change within this iteration
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  head = prevNode;

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

// Time complexity: O(n) | two reversals + one pass to add
// Space complexity: O(1) | in-place, only a few pointers
