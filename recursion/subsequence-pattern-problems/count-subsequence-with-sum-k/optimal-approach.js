// Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.

function countSubsequencesSumMemo(nums, k) {
  const totalLength = nums.length; // Total number of elements
  const memo = new Map(); // Cache for results of states identified by "index|currentSum"

  // Recursively explore subsequences starting at currentIndex with the accumulated currentSum
  function explore(currentIndex, currentSum) {
    // Prune when currentSum exceeds k because nums contains only positive integers
    if (currentSum > k) return 0;

    // When all elements have been considered, count 1 if currentSum equals k
    if (currentIndex === totalLength) {
      return currentSum === k ? 1 : 0;
    }

    // Return cached result if this state was already solved
    const key = currentIndex + "|" + currentSum;
    if (memo.has(key)) return memo.get(key);

    // Include nums[currentIndex] and move to the next index
    const includeCount = explore(
      currentIndex + 1,
      currentSum + nums[currentIndex]
    );

    // Exclude nums[currentIndex] and move to the next index
    const excludeCount = explore(currentIndex + 1, currentSum);

    // Store the total number of valid subsequences from this state
    const total = includeCount + excludeCount;
    memo.set(key, total);
    return total;
  }

  // Start exploration from index 0 with sum 0
  return explore(0, 0);
}

const nums = [4, 9, 2, 5, 1];

const k = 10;

const result = countSubsequencesSumMemo(nums, k);

console.log(result);

// Time complexity: O(n * k) | each state (index, currentSum) is solved once and cached
// Space complexity: O(n * k) | memoization table plus O(n) recursion depth stack
