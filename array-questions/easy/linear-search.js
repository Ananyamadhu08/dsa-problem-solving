// Given an array and an element num find if num is present in the given array or not. If present print the index of the element or print -1.

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
}

const numArr = [1, 2, 3, 4, 5];

const result = linearSearch(numArr, 6);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
