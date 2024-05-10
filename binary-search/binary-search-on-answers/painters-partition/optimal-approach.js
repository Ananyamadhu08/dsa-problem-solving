// Given an array, where the array represents the boards and each element of the given array represents the length of each board. Some numbers of painters are available to paint these boards. Consider that each unit of a board takes 1 unit of time to paint. You are supposed to return the area of the minimum time to get this job done of painting all the boards under the constraint that any painter will only paint the continuous sections of boards.

function countPainters(boards, time) {
  const n = boards.length;

  let numOfPainters = 1;

  let numOfBoards = 0;

  for (let i = 0; i < n; i++) {
    if (numOfBoards + boards[i] <= time) {
      numOfBoards += boards[i];
    } else {
      numOfPainters++;

      numOfBoards = boards[i];
    }
  }

  return numOfPainters;
}

function timeToPaintBoards(boards, painters) {
  let maxBoards = Math.max(...boards);
  let sumOfBoards = boards.reduce((acc, curr) => acc + curr);

  let low = maxBoards;
  let high = sumOfBoards;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const numOfPainters = countPainters(boards, mid);

    if (numOfPainters > painters) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

const boards = [10, 20, 30, 40];

const painters = 2;

const result = timeToPaintBoards(boards, painters);

console.log(result);

// Time complexity: O(N * log(sumOfBoards - maxBoards))
// Space complexity: O(1)
