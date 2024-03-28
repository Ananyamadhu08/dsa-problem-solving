// Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

function findLeaders(arr) {
  let leaders = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isLeader = false;
        break;
      }
    }

    if (isLeader) {
      leaders.push(arr[i]);
    }
  }

  return leaders;
}

const numArr = [10, 22, 12, 3, 0, 6];

const result = findLeaders(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(N)
