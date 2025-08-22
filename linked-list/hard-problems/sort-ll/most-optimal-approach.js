// Given the head of a singly linked list. Sort the values of the linked list in non-decreasing order and return the head of the modified linked list.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Cut 'size' nodes from 'start' and return the head of the next segment
function split(start, size) {
  if (!start) return null;

  let curr = start;

  for (let i = 1; i < size && curr.next; i++) {
    curr = curr.next;
  }

  const nextNode = curr.next; // head of remaining
  curr.next = null; // cut

  return nextNode;
}

// Merge two sorted lists return { head, tail }
function merge(listOne, listTwo) {
  const dummy = new Node(0);
  let tail = dummy;

  while (listOne && listTwo) {
    if (listOne.value <= listTwo.value) {
      tail.next = listOne;
      listOne = listOne.next;
    } else {
      tail.next = listTwo;
      listTwo = listTwo.next;
    }

    tail = tail.next;
  }

  tail.next = listOne || listTwo;

  // Advance tail to the end of merged list
  while (tail.next) tail = tail.next;

  return { head: dummy.next, tail };
}

// Bottom Up Merge Sort
function sortLL(head) {
  if (head === null || head.next === null) return head; // Empty or single node → already sorted

  // Compute length of the list
  let length = 0;

  let curr = head;

  while (curr !== null) {
    length++;
    curr = curr.next;
  }

  const dummy = new Node(0, head);

  // size = length of sub-lists to merge (1, 2, 4, 8, ...)
  for (let size = 1; size < length; size <<= 1) {
    let tail = dummy;
    let remaining = dummy.next;

    while (remaining) {
      const left = remaining; // left sub-list head
      const right = split(left, size); // right sub-list head (after cutting left)
      remaining = split(right, size); // next pair's head

      // Merge left & right and attach to 'tail'
      const merged = merge(left, right);
      tail.next = merged.head;
      tail = merged.tail;
    }
  }

  return dummy.next;
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
// Space complexity: O(1)
