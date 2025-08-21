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

class MinHeap {
  constructor() {
    this.heap = []; // internal array to store nodes
  }

  size() {
    return this.heap.length; // number of nodes in the heap
  }

  push(node) {
    this.heap.push(node); // insert node at the end
    this._bubbleUp(this.heap.length - 1); // restore heap order by bubbling up
  }

  pop() {
    if (this.heap.length === 0) return null; // empty heap, nothing to pop

    const smallestNode = this.heap[0]; // root is always the smallest
    const lastNode = this.heap.pop(); // remove the last element

    if (this.heap.length > 0) {
      this.heap[0] = lastNode; // move last node to root
      this._bubbleDown(0); // restore order by bubbling down
    }

    return smallestNode; // return the smallest node
  }

  _bubbleUp(childIndex) {
    while (childIndex > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2);

      // If parent is already smaller or equal, heap property holds
      if (this.heap[parentIndex].value <= this.heap[childIndex].value) break;

      // Otherwise, swap child and parent
      [this.heap[parentIndex], this.heap[childIndex]] = [
        this.heap[childIndex],
        this.heap[parentIndex],
      ];

      // Continue from the parent position
      childIndex = parentIndex;
    }
  }

  _bubbleDown(parentIndex) {
    const length = this.heap.length;

    while (true) {
      let smallestIndex = parentIndex;
      const leftChildIndex = 2 * parentIndex + 1;
      const rightChildIndex = 2 * parentIndex + 2;

      // Compare with left child
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].value < this.heap[smallestIndex].value
      ) {
        smallestIndex = leftChildIndex;
      }

      // Compare with right child
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].value < this.heap[smallestIndex].value
      ) {
        smallestIndex = rightChildIndex;
      }

      // If parent is already smallest, stop
      if (smallestIndex === parentIndex) break;

      // Swap parent with the smaller child
      [this.heap[parentIndex], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[parentIndex],
      ];

      // Continue from the child position
      parentIndex = smallestIndex;
    }
  }
}

function flattenLL(head) {
  if (!head) return null;

  // Seed heap with each list's head (walk across via `next`)
  const heap = new MinHeap();

  for (let currentHead = head; currentHead; currentHead = currentHead.next) {
    heap.push(currentHead);
  }

  // Build the output list via `child` only
  const dummy = new Node(-1);
  let tail = dummy;

  while (heap.size() > 0) {
    const node = heap.pop(); // smallest current node among the k heads

    const nextDown = node.child; // keep the next node in this column

    node.next = null; // we don't use across links in the result
    node.child = null; // detach old down link before stitching
    tail.child = node; // append into the flattened chain
    tail = node;

    if (nextDown) heap.push(nextDown); // bring next candidate from this column
  }

  return dummy.child;
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

// Time complexity: O(N log k)
// Space complexity: O(k)
