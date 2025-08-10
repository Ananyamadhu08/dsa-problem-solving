// Given the head of a singly linked list consisting of only 0, 1, or 2, sort the linked list in non-decreasing order by relinking existing nodes (no new nodes created).

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sortList(head) {
  if (head === null || head.next === null) return head; // Empty or single-node list

  // Count occurrences of 0, 1, and 2
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  let current = head;

  while (current !== null) {
    const currVal = current.value;

    if (currVal === 0) {
      zeroCount++;
    } else if (currVal === 1) {
      oneCount++;
    } else {
      twoCount++;
    }

    current = current.next;
  }

  // Overwrite node values in sorted order
  current = head;

  while (current !== null) {
    if (zeroCount > 0) {
      current.value = 0;
      zeroCount--;
    } else if (oneCount > 0) {
      current.value = 1;
      oneCount--;
    } else {
      current.value = 2;
      twoCount--;
    }

    current = current.next;
  }

  return head;
}

const numArr = [1, 0, 2, 0, 1];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = sortList(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
