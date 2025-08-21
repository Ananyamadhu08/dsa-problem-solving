// Given a special linked list containing n head nodes where every node in the linked list contains two pointers:
// - ‘Next’ points to the next node in the list
// - ‘Child’ pointer to a linked list where the current node is the head
// Each of these child linked lists is in sorted order and connected by a 'child' pointer. Flatten this linked list such that all nodes appear in a single sorted layer connected by the 'child' pointer and return the head of the modified list.

class Node {
  constructor(value, next = null, child = null) {
    this.value = value;
    this.next = next;
    this.child = child;
  }
}

function flattenLL(head) {
  if (head === null) return null; // Empty list

  const nodes = [];

  // Collect all nodes by traversing across heads and then down via child
  let across = head;
  while (across) {
    let down = across;
    while (down) {
      nodes.push(down);
      down = down.child;
    }
    across = across.next;
  }

  // Sort nodes by their values
  nodes.sort((a, b) => a.value - b.value);

  // Relink nodes into a single list using child, clear next pointers
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = null;
    nodes[i].child = i + 1 < nodes.length ? nodes[i + 1] : null;
  }

  return nodes[0] || null;
}

const lists = [
  [3, 7, 11],
  [1, 5, 9],
  [4, 8],
  [2, 6, 10, 12],
];

let head = null;
let prevHead = null;

for (let arr of lists) {
  let headNode = new Node(arr[0]);
  let mover = headNode;

  for (let i = 1; i < arr.length; i++) {
    mover.child = new Node(arr[i]);
    mover = mover.child;
  }

  if (!head) {
    head = headNode;
  } else {
    prevHead.next = headNode;
  }
  prevHead = headNode;
}

const result = flattenLL(head);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
