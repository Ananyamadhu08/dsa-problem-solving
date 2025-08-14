// Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. Check whether the linked list values form a palindrome or not. Return true if it forms a palindrome, otherwise, return false. A palindrome is a sequence that reads the same forward and backwards.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(node) {
  let prev = null;
  let current = node;
  while (current !== null) {
    const nxt = current.next;
    current.next = prev;
    prev = current;
    current = nxt;
  }
  return prev;
}

function isPalindrome(head) {
  if (head === null || head.next === null) return true;

  // Find middle (slow) using fast/slow pointers
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // If fast is not null, length is odd; skip the middle for comparison
  let secondHalf = fast ? slow.next : slow;

  // Reverse the second half
  const reversedHead = reverseList(secondHalf);

  // Compare first half and reversed second half
  let p1 = head;
  let p2 = reversedHead;

  let isPalindrome = true;

  while (p2 !== null) {
    if (p1.value !== p2.value) {
      isPalindrome = false;
      break;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  // Restore the second half (good hygiene)
  reverseList(reversedHead);

  return isPalindrome;
}

const numArr = [3, 7, 5, 7, 3];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = isPalindrome(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
