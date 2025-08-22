// Given the head of a doubly linked list with its values sorted in non-decreasing order. Remove all duplicate occurrences of any value in the list so that only distinct values are present in the list. Return the head of the modified linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function removeDuplicates(head) {
  if (head === null) return null;

  const seen = new Set();
  let current = head;

  while (current !== null) {
    if (seen.has(current.value)) {
      // unlink current from the DLL
      const prev = current.prev;
      const next = current.next;

      if (prev) prev.next = next;
      if (next) next.prev = prev;

      if (current === head) head = next; // if head was removed, move head

      current = next; // advance after deletion
    } else {
      seen.add(current.value);
      current = current.next; // advance normally
    }
  }

  return head;
}

const numArr = [1, 1, 3, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = removeDuplicates(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
