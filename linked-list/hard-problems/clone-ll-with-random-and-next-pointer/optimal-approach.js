// Given the head of a special linked list of n nodes where each node contains an additional pointer called 'random' which can point to any node in the list or null. Construct a deep copy of the linked list where -
// - n new nodes are created with corresponding values as original linked list.
// - The random pointers point to the corresponding new nodes as per their arrangement in the original list.
// - Return the head of the newly constructed linked list.

// Note: For custom input, a n x 2 matrix is taken with each row having 2 values:[ val, random_index] where -
// - val: an integer representing ListNode.val
// - random_index: index of the node (0 - n-1) that the random pointer points to, otherwise -1.

class Node {
  constructor(value, next = null, random = null) {
    this.value = value;
    this.next = next;
    this.random = random;
  }
}

function cloneRandomList(head) {
  if (!head) return null;

  // Map original node -> cloned node
  const map = new Map();

  // Create clones for all original nodes (values only)
  let current = head;
  while (current) {
    map.set(current, new Node(current.value));
    current = current.next;
  }

  // Wire up next and random for each clone using the map
  current = head;
  while (current) {
    const clone = map.get(current);
    clone.next = current.next ? map.get(current.next) : null;
    clone.random = current.random ? map.get(current.random) : null;
    current = current.next;
  }

  // Head of the cloned list
  return map.get(head);
}

const numArr = [1, 2, 3, 4, 5];

const head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

const nodesArray = [];
let current = head;

while (current) {
  nodesArray.push(current);
  current = current.next;
}

nodesArray[0].random = null; // 1.random = null
nodesArray[1].random = nodesArray[0]; // 2.random = 1
nodesArray[2].random = nodesArray[4]; // 3.random = 5
nodesArray[3].random = nodesArray[1]; // 4.random = 2
nodesArray[4].random = nodesArray[2]; // 5.random = 3

const result = cloneRandomList(head);

console.log(result);

// Time complexity: O(n) | two linear passes over the list
// Space complexity: O(n) | hash map storing original -> clone mapping
