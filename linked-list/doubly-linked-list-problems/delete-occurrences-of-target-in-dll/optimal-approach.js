// Given the head of a doubly linked list and an integer target. Delete all nodes in the linked list with the value target and return the head of the modified linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function deleteAllOccurrences(head, target) {
  let curr = head;

  while (curr !== null) {
    const nextNode = curr.next; // store next before we unlink curr

    if (curr.value === target) {
      const prevNode = curr.prev;

      if (curr === head) {
        // Deleting the head: move head forward
        head = nextNode || null;
        if (head) head.prev = null;
      } else {
        // Stitch prev and next around curr
        if (prevNode) prevNode.next = nextNode;
        if (nextNode) nextNode.prev = prevNode;
      }

      // Sever links of the current node
      curr.prev = null;
      curr.next = null;
    }

    curr = nextNode;
  }

  return head;
}

const numArr = [1, 2, 3, 1, 4];

const target = 1;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
}

const result = deleteAllOccurrences(head, target);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
