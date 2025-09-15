// Given an array nums of n integers. Return array of sum of all subsets of the array nums. Output can be returned in any order.

function generateSubsetSums(nums) {
  const subsetSums = [];

  function generateSubsets(currentIndex, currentSum) {
    // Base case: if we've made a choice for every number
    if (currentIndex === nums.length) {
      subsetSums.push(currentSum); // record the sum of this subset
      return;
    }

    // Choice 1: skip the current number
    generateSubsets(currentIndex + 1, currentSum);

    // Choice 2: include the current number
    generateSubsets(currentIndex + 1, currentSum + nums[currentIndex]);
  }

  // Start recursion at index 0 with a sum of 0
  generateSubsets(0, 0);

  return subsetSums;
}

const nums = [2, 3];

const result = generateSubsetSums(nums);

console.log(result);

// Time complexity: O(2^n) — each element creates two branches (include/skip).
// Space complexity: O(n) recursion depth + O(2^n) output size.
