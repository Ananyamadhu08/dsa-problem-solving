// Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

function mergeOverlappingSubintervals(arr) {
  const n = arr.length;

  arr.sort((a, b) => a[0] - b[0]);

  let resultArr = [arr[0]];

  for (let i = 1; i < n; i++) {
    const lastInterval = resultArr[resultArr.length - 1];
    const currInterval = arr[i];

    if (currInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
    } else {
      resultArr.push(currInterval);
    }
  }

  return resultArr;
}

const intervalArr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const result = mergeOverlappingSubintervals(intervalArr);

console.log(result);

// Time complexity: O(N log N) + O(N)
// Space complexity: O(N)
