// Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. Check whether the linked list values form a palindrome or not. Return true if it forms a palindrome, otherwise, return false. A palindrome is a sequence that reads the same forward and backwards.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  if (head === null || head.next === null) return true; // Single node or empty list is palindrome

  const nodeVals = [];
  let current = head;

  // Step 1: Store all values into an array
  while (current !== null) {
    nodeVals.push(current.value);
    current = current.next;
  }

  // Step 2: Compare from both ends of the array
  let i = 0;
  let j = nodeVals.length - 1;

  while (i < j) {
    if (nodeVals[i] !== nodeVals[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

const numArr = [3, 7, 5, 7, 3];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = isPalindrome(head);

console.log(result);

// Time complexity: O(n) | Traverse list once to create array, once to compare
// Space complexity: O(n) | Array to store node values
