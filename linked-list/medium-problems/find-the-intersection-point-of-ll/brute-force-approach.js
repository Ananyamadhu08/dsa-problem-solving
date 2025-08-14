// Given the heads of two linked lists A and B, containing positive integers. Find the node at which the two linked lists intersect. If they do intersect, return the node at which the intersection begins, otherwise return null. The Linked List will not contain any cycles. The linked lists must retain their original structure, given as per the input, after the function returns.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getIntersectionNode(headA, headB) {
  // For each node in list A
  for (let a = headA; a !== null; a = a.next) {
    // For each node in list B
    for (let b = headB; b !== null; b = b.next) {
      // Compare by reference (same object in memory)
      if (a === b) {
        return a; // Found the intersection node
      }
    }
  }

  return null; // No intersection
}

// Create first list A: [1, 2, 3]
const numArrOne = [1, 2, 3];

const headA = new Node(numArrOne[0]);
let moverA = headA;

for (let i = 1; i < numArrOne.length; i++) {
  const temp = new Node(numArrOne[i]);
  moverA.next = temp;
  moverA = temp;
}

// Create second list B: [7, 8]
const numArrTwo = [7, 8];

const headB = new Node(numArrTwo[0]);
let moverB = headB;

for (let i = 1; i < numArrTwo.length; i++) {
  const temp = new Node(numArrTwo[i]);
  moverB.next = temp;
  moverB = temp;
}

// Create shared tail: [4, 5]
const sharedArr = [4, 5];

const sharedHead = new Node(sharedArr[0]);
let moverShared = sharedHead;

for (let i = 1; i < sharedArr.length; i++) {
  const temp = new Node(sharedArr[i]);
  moverShared.next = temp;
  moverShared = temp;
}

// Connect the shared tail to both lists
moverA.next = sharedHead;
moverB.next = sharedHead;

const result = getIntersectionNode(headA, headB);

console.log(result);

// Time complexity: O(m * n) | m = length of list A, n = length of list B
// Space complexity: O(1)
