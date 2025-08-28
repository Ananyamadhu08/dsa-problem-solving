// Given an array nums and an integer k. Return true if there exist subsequences such that the sum of all elements in subsequences is equal to k else false.

function checkSubsequenceSum(nums, k) {
  const totalLength = nums.length;

  // memo.get(`${currentIndex}|${currentSum}`) => boolean (true if reachable)
  const memo = new Map();

  function exploreWithMemo(currentIndex, currentSum) {
    // Base success: we hit the target exactly
    if (currentSum === k) return true;

    // Base failure / pruning:
    // - used all elements without reaching k
    // - overshoot (safe because all nums[i] are positive)
    if (currentIndex === totalLength || currentSum > k) return false;

    // Check memoized result for this (index, sum) state
    const memoKey = currentIndex + "|" + currentSum;

    if (memo.has(memoKey)) return memo.get(memoKey);

    // Choice 1: include nums[currentIndex]
    if (exploreWithMemo(currentIndex + 1, currentSum + nums[currentIndex])) {
      memo.set(memoKey, true);
      return true;
    }

    // Choice 2: skip nums[currentIndex]
    if (exploreWithMemo(currentIndex + 1, currentSum)) {
      memo.set(memoKey, true);
      return true;
    }

    // Neither choice worked from this state
    memo.set(memoKey, false);

    return false;
  }

  // Start exploring from index 0 with sum 0
  return exploreWithMemo(0, 0);
}

const nums = [1, 2, 3, 4, 5];

const k = 8;

const result = checkSubsequenceSum(nums, k);

console.log(result);

// Time complexity: O(n * k) | at most (n+1)*(k+1) distinct (index,sum) states, each solved once and memoized.
// Space complexity: O(n * k) | for the memo table (number of states) + O(n) recursion depth.
