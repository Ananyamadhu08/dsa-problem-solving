// Given a sorted array of integers and a target x. Find the floor and ceiling of x. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x.

function findFloor(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let floor = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      floor = arr[mid];

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return floor;
}

function findCeil(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let ceil = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ceil = arr[mid];

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ceil;
}

function findFloorAndCeil(arr, target) {
  const floor = findFloor(arr, target);
  const ceil = findCeil(arr, target);

  return [floor, ceil];
}

const numArr = [3, 4, 6, 7, 9];

const target = 5;

const result = findFloorAndCeil(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
