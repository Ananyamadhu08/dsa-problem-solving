// Given the head of a singly linked list, group all the nodes with odd indices followed by the nodes with even indices, and return the reordered list. The relative order inside the odd and even groups should remain the same.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function oddEvenList(head) {
  if (head === null || head.next === null) return head; // Empty or single node list

  let oddTail = head; // tail of odd chain (starts at index 1)
  let evenHead = head.next; // head of even chain  (starts at index 2)
  let evenTail = evenHead; // tail of even chain

  let current = evenTail.next; // start from index 3 (odd)
  let isOdd = true; // current (3rd) is odd index

  // Build two chains by appending nodes to their respective tails
  while (current !== null) {
    if (isOdd) {
      oddTail.next = current; // append to odd chain
      oddTail = oddTail.next;
    } else {
      evenTail.next = current; // append to even chain
      evenTail = evenTail.next;
    }

    current = current.next;
    isOdd = !isOdd; // flip parity for next node
  }

  // Close the even chain and attach after odd chain
  evenTail.next = null; // ensure final tail is null
  oddTail.next = evenHead; // stitch even chain after odd chain

  return head;
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = oddEvenList(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
