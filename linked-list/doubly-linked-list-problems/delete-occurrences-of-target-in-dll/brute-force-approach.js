// Given the head of a doubly linked list and an integer target. Delete all nodes in the linked list with the value target and return the head of the modified linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function deleteAllOccurrencesBrute(head, target) {
  if (head === null) return null;

  let newHead = null;
  let newTail = null;

  let current = head;

  while (current !== null) {
    if (current.value !== target) {
      // Create a new node and append to the new DLL
      const node = new Node(current.value);

      if (newHead === null) {
        newHead = node;
        newTail = node;
      } else {
        newTail.next = node;
        node.prev = newTail;
        newTail = node;
      }
    }

    current = current.next;
  }

  return newHead; // could be null if all nodes matched target
}

const numArr = [1, 2, 3, 1, 4];

const target = 1;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = deleteAllOccurrencesBrute(head, target);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
