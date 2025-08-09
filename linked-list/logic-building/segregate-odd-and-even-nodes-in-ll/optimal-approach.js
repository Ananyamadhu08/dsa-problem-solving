// Given the head of a singly linked list, group all the nodes with odd indices followed by the nodes with even indices, and return the reordered list. The relative order inside the odd and even groups should remain the same.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function oddEvenList(head) {
  // Edge cases: 0 or 1 node → already in correct order
  if (head === null || head.next === null) return head;

  // Set up pointers:
  let odd = head; // odd starts at head (index 1)
  let even = head.next; // even starts at head.next (index 2)
  const evenHead = even; // store start of even chain to connect later

  // Traverse list while there are even nodes with a next
  while (even !== null && even.next !== null) {
    // Connect odd node to the next odd node
    odd.next = even.next;
    odd = odd.next; // move odd pointer forward

    // Connect even node to the next even node
    even.next = odd.next;
    even = even.next; // move even pointer forward
  }

  // Attach the even list after the odd list
  odd.next = evenHead;

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
