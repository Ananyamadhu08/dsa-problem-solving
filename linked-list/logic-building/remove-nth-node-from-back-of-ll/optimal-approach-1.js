// Given the head of a singly linked list and an integer n, remove the nth node from the back of the list and return the modified head.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function removeNthNode(head, n) {
  // Create a dummy node to handle cases where the head might be removed
  const dummy = new Node(0, head);

  // Two pointers starting from dummy
  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n+1 steps ahead so gap between fast and slow is n nodes
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers together until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Slow is just before the target node; skip it
  slow.next = slow.next ? slow.next.next : null;

  // Return the new head
  return dummy.next;
}

const numArr = [1, 2, 3, 4, 5];

const n = 2;

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = removeNthNode(head, n);

console.log(result);

// Time complexity: O(n) | n is the number of nodes in the list
// Space complexity: O(1)
