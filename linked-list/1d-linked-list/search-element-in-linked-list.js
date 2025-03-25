// Given a singly linked list and a target value, check if the value exists.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function searchElementInLL(head, value) {
  let temp = head;

  while (temp !== null) {
    if (temp.value === value) {
      return true;
    }

    temp = temp.next;
  }

  return false;
}

const numArr = [12, 5, 8, 7];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = searchElementInLL(head, 8);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
