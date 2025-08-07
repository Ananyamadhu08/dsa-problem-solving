// Given an array of integers, convert it into a singly linked list where each node points to the next element in the array.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function convertArrToLL(arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let mover = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  return head;
}

const numArr = [12, 5, 8, 7];

const result = convertArrToLL(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
