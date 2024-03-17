// Remove duplicates from a sorted array in a way that each unique element appears only once. The array should be modified in place, and the function should return the number of unique elements.

function removeDuplicates(arr) {
  const uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }

  for (let j = 0; j < uniqueElements.length; j++) {
    arr[j] = uniqueElements[j];
  }

  return uniqueElements.length;
}

const numArr = [1, 1, 2, 2, 2, 3, 3];

const result = removeDuplicates(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(N)
