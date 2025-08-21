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

// Merge two sorted child-chains in-place, return merged head.
function mergeTwoLists(listOne, listTwo) {
  const dummyHead = new Node(-1);
  let current = dummyHead;

  let pointerOne = listOne;
  let pointerTwo = listTwo;

  while (pointerOne && pointerTwo) {
    if (pointerOne.value <= pointerTwo.value) {
      const nextDown = pointerOne.child; // remember next before rewiring
      pointerOne.next = null; // across links not used in result
      pointerOne.child = null; // detach old child link
      current.child = pointerOne; // append
      current = pointerOne; // advance current
      pointerOne = nextDown; // move down in listOne
    } else {
      const nextDown = pointerTwo.child;
      pointerTwo.next = null;
      pointerTwo.child = null;
      current.child = pointerTwo;
      current = pointerTwo;
      pointerTwo = nextDown;
    }
  }

  // Attach remaining nodes from whichever list is not empty (and sanitize links)
  let remaining = pointerOne || pointerTwo;
  while (remaining) {
    const nextDown = remaining.child;
    remaining.next = null;
    remaining.child = null;
    current.child = remaining;
    current = remaining;
    remaining = nextDown;
  }

  return dummyHead.child;
}

function flattenLL(head) {
  if (!head) return null;

  // Gather all column heads by walking the `next` chain
  let listHeads = [];
  for (let currentHead = head; currentHead; currentHead = currentHead.next) {
    listHeads.push(currentHead);
  }

  // If there are 0 or 1 lists, it's already flattened (head is null or the only list)
  if (listHeads.length <= 1) return head;

  // Iteratively merge pairs until a single list remains
  while (listHeads.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < listHeads.length; i += 2) {
      if (i + 1 < listHeads.length) {
        mergedLists.push(mergeTwoLists(listHeads[i], listHeads[i + 1]));
      } else {
        mergedLists.push(listHeads[i]); // odd one out, carry forward
      }
    }
    listHeads = mergedLists; // move to next round
  }

  return listHeads[0]; // single flattened child-only chain
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
