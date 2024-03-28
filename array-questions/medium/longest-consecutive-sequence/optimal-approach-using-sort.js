// Given an unsorted array of integers, return the length of the longest consecutive sequence.

function longestConsecutiveSequence(arr) {
  if (arr.length === 0) return 0;

  arr.sort((a, b) => a - b);

  let currentStreak = 1;
  let longestStreak = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] === arr[i - 1] + 1) {
        currentStreak++;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }

  return Math.max(longestStreak, currentStreak);
}

const numArr = [3, 7, 4, 9, 2, 3, 1];

const result = longestConsecutiveSequence(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(1)
