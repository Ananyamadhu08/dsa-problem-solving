// Given a binary array, return the maximum number of consecutive 1's in the array.

function maxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

const numArr = [1, 1, 0, 1, 1, 1, 0, 1];

const result = maxConsecutiveOnes(numArr, 6);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
