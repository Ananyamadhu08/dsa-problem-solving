// Remove duplicates from a sorted array in a way that each unique element appears only once. The array should be modified in place, and the function should return the number of unique elements.

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

const numArr = [1, 1, 2, 2, 2, 3, 3];

const result = removeDuplicates(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
