// Find the next permutation of an array of integers, it is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged in ascending order.

function nextPermutation(arr) {
  let i = arr.length - 2;

  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = arr.length - 1;

    while (arr[j] <= arr[i]) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let left = i + 1;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

const numArr = [2, 1, 5, 4, 3, 0];

const result = nextPermutation(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
