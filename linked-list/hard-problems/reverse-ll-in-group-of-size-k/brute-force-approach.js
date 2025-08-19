// Given the head of a singly linked list containing integers, reverse the nodes of the list in groups of k and return the head of the modified list. If the number of nodes is not a multiple of k, then the remaining nodes at the end should be kept as is and not reversed. Do not change the values of the nodes, only change the links between nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseKGroupInLL(head, k) {
  if (head === null || k <= 1) return head; // nothing to do

  const dummy = new Node(0, head); // dummy helps handle head changes
  let prevGroupTail = dummy;
  let current = head;

  while (current) {
    // Collect up to k nodes into an array
    const nodes = [];

    let count = 0;
    let temp = current;

    while (temp && count < k) {
      nodes.push(temp);
      count++;
      temp = temp.next;
    }

    // If fewer than k remain → attach as-is and stop
    if (count < k) {
      prevGroupTail.next = current;
      break;
    }

    // Otherwise, reverse this block of k nodes
    const nextGroupHead = temp;
    let prev = nextGroupHead;

    for (let i = 0; i < nodes.length; i++) {
      const currentNode = nodes[i];
      currentNode.next = prev;
      prev = currentNode;
    }

    // Stitch the reversed block into the processed part
    prevGroupTail.next = prev;

    // Move prevGroupTail to the end of this block (original first node)
    prevGroupTail = nodes[0];

    // Continue from the next block
    current = nextGroupHead;
  }

  return dummy.next;
}

const numArr = [1, 2, 3, 4, 5];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const result = reverseKGroupInLL(head, 2);

console.log(result);

// Time complexity: O(n) | each node is visited and rewired once
// Space complexity: O(k) | array of k node references per group
