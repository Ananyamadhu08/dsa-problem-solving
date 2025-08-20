// Given the heads of two linked lists, list1 and list2, where each linked list has its elements sorted in non-decreasing order, merge them into a single sorted linked list and return the head of the merged linked list.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTwoSortedLists(listOne, listTwo) {
  // Base case: if one list is empty, return the other
  if (listOne === null) return listTwo;
  if (listTwo === null) return listOne;

  // Compare the current heads of both lists
  if (listOne.value <= listTwo.value) {
    // listOne's node is smaller (or equal), so it comes first
    // Recursively merge the rest of listOne (listOne.next) with all of listTwo
    listOne.next = mergeTwoSortedLists(listOne.next, listTwo);

    // Return listOne, because its node is the head of this merged portion
    return listOne;
  } else {
    // listTwo's node is smaller, so it comes first
    // Recursively merge all of listOne with the rest of listTwo (listTwo.next)
    listTwo.next = mergeTwoSortedLists(listOne, listTwo.next);

    // Return listTwo, because its node is the head of this merged portion
    return listTwo;
  }
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

// Time complexity: O(n + m) | every node in both lists is processed once
// Space complexity: O(n + m) | recursion stack depth can go as deep as total number of nodes
