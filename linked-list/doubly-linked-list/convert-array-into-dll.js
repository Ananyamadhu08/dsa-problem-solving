// Given an array arr, convert it into a doubly linked list and return the head of the list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function convertArrIntoDLL(arr) {
  if (arr.length === 0) return null; // Edge case: empty array

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);

    current.next = newNode; // Link forward
    newNode.prev = current; // Link backward
    current = newNode; // Move to next node
  }

  return head;
}

const arr = [1, 2, 3, 4];

const result = convertArrIntoDLL(arr);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
