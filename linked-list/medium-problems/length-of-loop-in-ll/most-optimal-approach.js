// Given the head of a singly linked list, find the length of the loop in the linked list if it exists. Return the length of the loop if it exists; otherwise, return 0. A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally, pos is used to denote the index (0-based) of the node from where the loop starts.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Brent's cycle detection (power-of-two window). Uses a moving "hare" and a periodically shifted "tortoise" anchor. When hare meets tortoise inside the cycle, `cycleLength` equals the loop length.
function findLengthOfLoop(head) {
  if (head === null) return 0;

  let power = 1; // current window size (leash length)
  let cycleLength = 1; // steps since last anchor shift (our running count)

  let tortoise = head; // anchor (moves only when cycleLength === power)
  let hare = head.next; // runner (moves one step each iteration)

  if (hare === null) return 0; // single node, no self-loop

  // Phase: detect cycle and compute its length directly in cycleLength
  while (tortoise !== hare) {
    // If hare hits the end, the list is acyclic
    if (hare === null || hare.next === null) return 0;

    // If we've used up the current window, shift the anchor and double the window
    if (cycleLength === power) {
      tortoise = hare;
      power <<= 1; // double the window size
      cycleLength = 0; // restart counting from this new anchor
    }

    hare = hare.next; // advance the runner
    cycleLength += 1; // count steps since last anchor shift
  }

  // Meeting point reached: cycleLength is exactly the length of the loop
  return cycleLength;
}

const numArr = [1, 2, 3, 4, 5];

let head = new Node(numArr[0]);
let mover = head;

for (let i = 1; i < numArr.length; i++) {
  let temp = new Node(numArr[i]);
  mover.next = temp;
  mover = temp;
}

// Creating a loop: last node points to node with value 2
mover.next = head.next;

const result = findLengthOfLoop(head);

console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
