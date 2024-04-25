// Given an array of numbers, find the count of reverse pairs. Reverse Pairs are those pairs where i < j and arr[i] > 2 * arr[j].

function reversePairs(arr) {
  const n = arr.length;

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > 2 * arr[j]) {
        count++;
      }
    }
  }

  return count;
}

const numArr = [40, 25, 19, 12, 9, 6, 2];

const result = reversePairs(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
