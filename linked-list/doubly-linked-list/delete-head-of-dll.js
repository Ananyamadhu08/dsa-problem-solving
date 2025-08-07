// Given the head of a doubly linked list, delete the head and return the modified head.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function deleteHead(head) {
  if (head === null || head.next === null) return null; // Empty or single-node list

  let newHead = head.next;

  newHead.prev = null; // Disconnect the previous head

  return newHead;
}

const numArr = [1, 2, 3];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = deleteHead(head);

console.log(result);

// Time complexity: O(1)
// Space complexity: O(1)
