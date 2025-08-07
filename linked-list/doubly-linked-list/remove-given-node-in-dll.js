// Given a node reference in a doubly linked list (not the head), delete that node from the list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function deleteGivenNode(node) {
  if (!node || !node.prev) return; // Ensure node is valid and not head

  const prevNode = node.prev;
  const nextNode = node.next;

  // Rewire pointers to skip the current node
  if (prevNode) prevNode.next = nextNode;
  if (nextNode) nextNode.prev = prevNode;

  // Optional: clean up the removed node
  node.prev = null;
  node.next = null;
}

// --- Creating DLL and deleting the node at index 1 (0-indexed) ---

const numArr = [1, 3, 5];

let head = new Node(numArr[0]);
let mover = head;

const nodeList = [head]; // Store references to each node

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  temp.prev = mover;
  mover = temp;
  nodeList.push(temp); // Add to list for easy access
}

// Delete the node at index 1 (value = 3)
deleteGivenNode(nodeList[1]);

console.log(head); // Should output DLL: 1 <-> 5

// Time complexity: O(1)
// Space complexity: O(1)
