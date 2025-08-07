// Given a singly linked list, iterate through it and print the value of each node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function iterateLinkedList(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
  }
}

const numArr = [12, 5, 8, 7];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

iterateLinkedList(head);

// Time complexity: O(N)
// Space complexity: O(1)
