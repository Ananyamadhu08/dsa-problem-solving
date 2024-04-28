// Given a sorted array of distinct values and a target x. You need to search for the index of the target in the array. If the value is present in the array return its index, otherwise determine the index where it would be inserted in the array while maintaining the sorted order.

function searchInsertPosition(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let insertPosition = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      insertPosition = mid;

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return insertPosition;
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = searchInsertPosition(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
