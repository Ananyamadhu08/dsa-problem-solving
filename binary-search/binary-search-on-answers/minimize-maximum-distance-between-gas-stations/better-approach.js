// Given a sorted array of length ‘n’, which contains positive integer positions of ‘n’ gas stations on the X-axis. You are also given an integer ‘k’. You have to place 'k' new gas stations on the X-axis. You can place them anywhere on the non-negative side of the X-axis, even on non-integer positions. Let 'dist' be the maximum value of the distance between adjacent gas stations after adding k new gas stations. Find the minimum value of ‘dist’.

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort((a, b) => b.distance - a.distance);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }
}

function minimizeMaximumDistance(gasStations, numOfGasStations) {
  const n = gasStations.length;

  const sections = new Array(n - 1).fill(0);

  const priorityQueue = new PriorityQueue();

  for (let i = 0; i < n - 1; i++) {
    priorityQueue.enqueue({
      distance: gasStations[i + 1] - gasStations[i],
      index: i,
    });
  }

  for (let i = 1; i <= numOfGasStations; i++) {
    const queueElement = priorityQueue.dequeue();

    const elementIndex = queueElement.index;

    sections[elementIndex]++;

    const sectionDiff =
      gasStations[elementIndex + 1] - gasStations[elementIndex];

    const sectionLength = sectionDiff / (sections[elementIndex] + 1);

    priorityQueue.enqueue({ distance: sectionLength, index: elementIndex });
  }

  return priorityQueue.front().distance;
}

const gasStations = [1, 2, 3, 4, 5];

const numOfGasStations = 4;

const result = minimizeMaximumDistance(gasStations, numOfGasStations);

console.log(result);

// Time complexity: O((N log N) + (numOfGasStations log N))
// Space complexity: O(N - 1)
