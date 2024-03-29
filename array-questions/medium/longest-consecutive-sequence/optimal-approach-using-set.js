// Given an unsorted array of integers, return the length of the longest consecutive sequence.

function longestConsecutiveSequence(arr) {
  let numSet = new Set(arr);
  let longestStreak = 0;

  for (let num of arr) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

const numArr = [3, 7, 4, 9, 2, 3, 1];

const result = longestConsecutiveSequence(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
