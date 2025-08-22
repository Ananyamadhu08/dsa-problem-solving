// Given the head of a singly linked list. Sort the values of the linked list in non-decreasing order and return the head of the modified linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeTwoSortedLists(listOne, listTwo) {
  const dummy = new Node(0);
  let current = dummy;

  while (listOne !== null && listTwo !== null) {
    if (listOne.value <= listTwo.value) {
      current.next = listOne;
      listOne = listOne.next;
    } else {
      current.next = listTwo;
      listTwo = listTwo.next;
    }
    current = current.next;
  }

  // Append any remaining nodes
  current.next = listOne !== null ? listOne : listTwo;

  return dummy.next;
}

function sortLL(head) {
  if (head === null || head.next === null) return head; // Empty or single node → already sorted

  // Split the list into two halves using slow/fast pointers
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Now head is the start of the first half, slow is the start of the second half
  prev.next = null; // Cut the list into two halves

  // Recursively sort each half
  const leftHalf = sortListMergeSort(head);
  const rightHalf = sortListMergeSort(slow);

  // Merge the two sorted halves
  return mergeTwoSortedLists(leftHalf, rightHalf);
}

const numArr = [5, 6, 1, 2, 1];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = sortLL(head);

console.log(result);

// Time complexity: O(n log n)
// Space complexity: O(log n) | due to recursion stack
