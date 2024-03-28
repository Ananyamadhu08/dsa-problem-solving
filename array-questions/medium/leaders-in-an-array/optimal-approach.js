// Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

function findLeaders(arr) {
  let leaders = [];
  let maxFromRight = arr[arr.length - 1];

  leaders.push(maxFromRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      leaders.push(arr[i]);
      maxFromRight = arr[i];
    }
  }

  return leaders.reverse();
}

const numArr = [10, 22, 12, 3, 0, 6];

const result = findLeaders(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
