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

  let current = head;

  while (current !== null) {
    // While the next node exists and has the same value, unlink the duplicate
    while (current.next !== null && current.next.value === current.value) {
      const duplicateNode = current.next;
      const nodeAfterDuplicate = duplicateNode.next;

      // Skip the duplicate forward
      current.next = nodeAfterDuplicate;

      // Fix backward link if there's a node after the duplicate
      if (nodeAfterDuplicate !== null) {
        nodeAfterDuplicate.prev = current;
      }
    }

    // Move to the next distinct value
    current = current.next;
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
// Space complexity: O(1)
