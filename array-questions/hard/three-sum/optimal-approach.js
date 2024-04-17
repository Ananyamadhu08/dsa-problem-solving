// Given an array of integers, find unique triplets that add up to give a sum of zero.

function threeSum(arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  let tripletsArr = [];

  for (let i = 0; i < n; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let tempArr = [arr[i], arr[j], arr[k]];
        tripletsArr.push(tempArr);

        j++;
        k--;

        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }

  return tripletsArr;
}

const numArr = [-1, 0, 1, 2, -1, -4];

const result = threeSum(numArr);

console.log(result);

// Time complexity: O(N log N) + O(N^2)
// Space complexity: O(no. of the unique triplets)
