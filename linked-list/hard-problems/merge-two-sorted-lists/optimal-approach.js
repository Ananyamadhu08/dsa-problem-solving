// Given the heads of two linked lists, list1 and list2, where each linked list has its elements sorted in non-decreasing order, merge them into a single sorted linked list and return the head of the merged linked list.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTwoSortedLists(listOne, listTwo) {
  if (listOne === null && listTwo === null) return null;

  // Use a dummy node to simplify building the merged list
  const dummy = new Node(0);
  let current = dummy;

  // Pointers to traverse both lists
  let listOneCurr = listOne;
  let listTwoCurr = listTwo;

  // Pick the smaller current node from the two lists and attach it to the merged list
  while (listOneCurr !== null && listTwoCurr !== null) {
    if (listOneCurr.value <= listTwoCurr.value) {
      current.next = listOneCurr;
      listOneCurr = listOneCurr.next;
    } else {
      current.next = listTwoCurr;
      listTwoCurr = listTwoCurr.next;
    }
    current = current.next;
  }

  // Attach the remaining nodes from whichever list is not yet exhausted
  current.next = listOneCurr !== null ? listOneCurr : listTwoCurr;

  // The merged list starts after the dummy node
  return dummy.next;
}

const numArrOne = [2, 4, 7, 9];

const headOne = new Node(numArrOne[0]);
let moverOne = headOne;

for (let i = 1; i < numArrOne.length; i++) {
  const temp = new Node(numArrOne[i]);
  moverOne.next = temp;
  moverOne = temp;
}

const numArrTwo = [1, 2, 5, 6];

const headTwo = new Node(numArrTwo[0]);
let moverTwo = headTwo;

for (let i = 1; i < numArrTwo.length; i++) {
  const temp = new Node(numArrTwo[i]);
  moverTwo.next = temp;
  moverTwo = temp;
}

const result = mergeTwoSortedLists(headOne, headTwo);

console.log(result);

// Time complexity: O(n + m) | each node from both lists is visited and linked once
// Space complexity: O(1) | reuses existing nodes; only a few pointer variables are used
