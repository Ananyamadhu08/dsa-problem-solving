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

  // 1) Interweave: insert each clone right after its original
  let current = head;
  while (current) {
    const clone = new Node(current.value, current.next, null);
    current.next = clone;
    current = clone.next;
  }

  // 2) Set random for each clone using the interweaving property
  current = head;
  while (current) {
    const clone = current.next;
    clone.random = current.random ? current.random.next : null;
    current = clone.next;
  }

  // 3) Unweave: separate original and cloned lists
  current = head;
  const dummy = new Node(0);
  let cloneTail = dummy;

  while (current) {
    const clone = current.next;
    const originalNext = clone.next;

    // append clone to cloned chain
    cloneTail.next = clone;
    cloneTail = clone;

    // restore original chain
    current.next = originalNext;

    current = originalNext;
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

// Time complexity: O(n) | three linear passes over the list
// Space complexity: O(1) extra | in-place interweaving (excluding output list)
