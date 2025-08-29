// Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.

function countSubsequenceWithTargetSum(nums, k) {
  const totalLength = nums.length; // total number of elements in the array

  // Recursively explore subsequences starting from index `currentIndex`. Track the current sum and whether we have picked at least one element
  function explore(currentIndex, currentSum, hasPicked) {
    // Prune if currentSum already exceeds k (all numbers are positive)
    if (currentSum > k) return 0;

    // Base case: if we've considered all elements
    if (currentIndex === totalLength) {
      // Count this subsequence only if sum == k and it's non-empty
      return currentSum === k && hasPicked ? 1 : 0;
    }

    // Option 1: include nums[currentIndex] in the subsequence
    const includeCount = explore(
      currentIndex + 1,
      currentSum + nums[currentIndex],
      true // Mark that at least one element has been included
    );

    // Option 2: skip nums[currentIndex] and move on
    const excludeCount = explore(currentIndex + 1, currentSum, hasPicked);

    // Total count from this position
    return includeCount + excludeCount;
  }

  // Start recursion from index 0, with sum 0, and no picks yet
  return explore(0, 0, false);
}

// Example usage:
const nums = [4, 9, 2, 5, 1];

const k = 10;

const result = countSubsequenceWithTargetSum(nums, k);

console.log(result);

// Time complexity: O(2^n) | each element can be either included or excluded
// Space complexity: O(n) | recursion depth stack
