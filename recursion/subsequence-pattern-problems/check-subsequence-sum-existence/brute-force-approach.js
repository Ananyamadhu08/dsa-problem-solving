// Given an array nums and an integer k. Return true if there exist subsequences such that the sum of all elements in subsequences is equal to k else false.

function checkSubsequenceSum(nums, k) {
  const totalLength = nums.length; // total number of elements in the array

  // Recursively explore subsequences starting from index `currentIndex`
  function exploreSubsequence(currentIndex, currentSum) {
    // Success case: if we've hit the target sum k
    if (currentSum === k) return true;

    // Failure cases: if we've used all elements OR exceeded k
    if (currentIndex === totalLength || currentSum > k) return false;

    // Option 1: include nums[currentIndex] in the sum
    if (exploreSubsequence(currentIndex + 1, currentSum + nums[currentIndex])) {
      return true; // found a valid subsequence by including this element
    }

    // Option 2: skip nums[currentIndex] and move on
    if (exploreSubsequence(currentIndex + 1, currentSum)) {
      return true; // found a valid subsequence by skipping this element
    }

    // If neither option worked, return false for this path
    return false;
  }

  // Start exploring from index 0 with an initial sum of 0
  return exploreSubsequence(0, 0);
}

const nums = [1, 2, 3, 4, 5];

const k = 8;

const result = checkSubsequenceSum(nums, k);

console.log(result);

// Time complexity: O(2^n) | each element can be included or excluded
// Space complexity: O(n) | recursion depth stack
