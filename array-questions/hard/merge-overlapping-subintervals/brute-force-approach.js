// Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

function mergeOverlappingSubintervals(arr) {
  const n = arr.length;

  arr.sort((a, b) => a[0] - b[0]);

  let resultArr = [];

  for (let i = 0; i < n; i++) {
    let start = arr[i][0];
    let end = arr[i][1];

    if (resultArr.length && end <= resultArr[resultArr.length - 1][1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }

    resultArr.push([start, end]);
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

// Time complexity: O(N log N) + O(2N)
// Space complexity: O(N)
