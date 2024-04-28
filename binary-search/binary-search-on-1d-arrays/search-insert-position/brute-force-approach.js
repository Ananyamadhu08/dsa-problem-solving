// Given a sorted array of distinct values and a target x. You need to search for the index of the target in the array. If the value is present in the array return its index, otherwise determine the index where it would be inserted in the array while maintaining the sorted order.

function searchInsertPosition(arr, target) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] >= target) {
      return i;
    }
  }

  return n;
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = searchInsertPosition(numArr, target);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
