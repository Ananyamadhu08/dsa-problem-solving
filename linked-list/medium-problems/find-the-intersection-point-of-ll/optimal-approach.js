// Given the heads of two linked lists A and B, containing positive integers. Find the node at which the two linked lists intersect. If they do intersect, return the node at which the intersection begins, otherwise return null. The Linked List will not contain any cycles. The linked lists must retain their original structure, given as per the input, after the function returns.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getIntersectionNode(headA, headB) {
  const seen = new Set();

  // Add all nodes from A to the set (by reference)
  let a = headA;

  while (a !== null) {
    seen.add(a);
    a = a.next;
  }

  // Walk B; the first node present in the set is the intersection
  let b = headB;

  while (b !== null) {
    if (seen.has(b)) return b; // same node object
    b = b.next;
  }

  return null;
}

const numArrOne = [1, 2, 3];

const headA = new Node(numArrOne[0]);
let moverA = headA;

for (let i = 1; i < numArrOne.length; i++) {
  const temp = new Node(numArrOne[i]);
  moverA.next = temp;
  moverA = temp;
}

const numArrTwo = [7, 8];

const headB = new Node(numArrTwo[0]);
let moverB = headB;

for (let i = 1; i < numArrTwo.length; i++) {
  const temp = new Node(numArrTwo[i]);
  moverB.next = temp;
  moverB = temp;
}

const sharedArr = [4, 5];

const sharedHead = new Node(sharedArr[0]);
let moverShared = sharedHead;

for (let i = 1; i < sharedArr.length; i++) {
  const temp = new Node(sharedArr[i]);
  moverShared.next = temp;
  moverShared = temp;
}

moverA.next = sharedHead;
moverB.next = sharedHead;

const result = getIntersectionNode(headA, headB);

console.log(result);

// Time complexity: O(m * n) | m = length of list A, n = length of list B
// Space complexity: O(1)
