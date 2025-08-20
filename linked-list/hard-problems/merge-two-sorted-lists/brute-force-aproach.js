// Given the heads of two linked lists, list1 and list2, where each linked list has its elements sorted in non-decreasing order, merge them into a single sorted linked list and return the head of the merged linked list.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTwoSortedLists(listOne, listTwo) {
  if (listOne === null && listTwo === null) return null;

  // Collect all values from both lists
  const values = [];

  let listOneCurr = listOne;
  let listTwoCurr = listTwo;

  while (listOneCurr) {
    values.push(listOneCurr.value);
    listOneCurr = listOneCurr.next;
  }

  while (listTwoCurr) {
    values.push(listTwoCurr.value);
    listTwoCurr = listTwoCurr.next;
  }

  // Sort the combined values
  values.sort((a, b) => a - b);

  // Rebuild a new linked list from sorted values
  const dummy = new Node(0);
  let current = dummy;

  for (let value of values) {
    const temp = new Node(value);
    current.next = temp;
    current = temp;
  }

  // Return the head of the new merged list
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

// Time complexity: O((n + m) log(n + m)) | collecting values + sorting
// Space complexity: O(n + m) | extra array to store values + rebuilt list
