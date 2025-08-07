// Given a singly linked list, print the number of nodes present.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function lengthOfLL(head) {
  let temp = head;
  let count = 0;

  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  return count;
}

const numArr = [12, 5, 8, 7];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = lengthOfLL(head);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
