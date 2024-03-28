// Given an unsorted array of integers, return the length of the longest consecutive sequence.

function longestConsecutiveSequence(arr) {
  if (arr.length === 0) return 0;

  let longestStreak = 0;

  for (let num of arr) {
    let currentNum = num;
    let currentStreak = 1;

    while (arr.includes(currentNum + 1)) {
      currentNum += 1;
      currentStreak += 1;
    }

    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
}

const numArr = [3, 7, 4, 9, 1, 3, 2];

const result = longestConsecutiveSequence(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
