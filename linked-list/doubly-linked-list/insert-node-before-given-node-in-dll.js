// Given a node in a doubly linked list and an integer X, insert a node with value X before the given node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function insertBeforeGivenNode(node, X) {
  const newNode = new Node(X);

  const prevNode = node.prev;

  prevNode.next = newNode;
  newNode.prev = prevNode;

  newNode.next = node;
  node.prev = newNode;
}

const numArr = [1, 2, 3];

const X = 7;

let head = new Node(numArr[0]);
let mover = head;

const nodeList = [head];

for (let i = 1; i < numArr.length; i++) {
  const temp = new Node(numArr[i]);
  temp.prev = mover;
  mover.next = temp;
  mover = temp;
  nodeList.push(temp);
}

insertBeforeGivenNode(nodeList[1], X);

console.log(head);
