// Given a strictly increasing array and a positive integer k. Find the kth positive integer missing from the array.

function findKthMissingNumber(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      k++;
    } else {
      break;
    }
  }

  return k;
}

const numArr = [2, 3, 4, 7, 11];

const k = 5;

const result = findKthMissingNumber(numArr, k);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
