// Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. Check whether the linked list values form a palindrome or not. Return true if it forms a palindrome, otherwise, return false. A palindrome is a sequence that reads the same forward and backwards.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindromeSinglePass(head) {
  if (head === null || head.next === null) return true;

  let reversedFirstHalf = null; // will hold reversed first half
  let slow = head;
  let fast = head;

  // Reverse first half while moving to the middle
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;

    // reverse step for 'slow'
    const nextSlow = slow.next;
    slow.next = reversedFirstHalf;
    reversedFirstHalf = slow;
    slow = nextSlow;
  }

  // If odd length, skip the middle node
  let right = fast ? slow.next : slow; // fast non-null means odd length
  let left = reversedFirstHalf;

  // Compare left (reversed first half) and right (second half)
  let isPalindrome = true;
  while (left !== null && right !== null) {
    if (left.value !== right.value) {
      isPalindrome = false;
      break;
    }
    left = left.next;
    right = right.next;
  }

  // Restore the first half to original order
  // reversedFirstHalf is head of reversed-first-half slow is:
  //   - if odd: middle node, with slow.next = original right half head
  //   - if even: start of right half
  let previous = slow; // reconnect point (middle for odd, right-start for even)
  while (reversedFirstHalf !== null) {
    const nextNode = reversedFirstHalf.next;
    reversedFirstHalf.next = previous;
    previous = reversedFirstHalf;
    reversedFirstHalf = nextNode;
  }

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

const result = isPalindromeSinglePass(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
