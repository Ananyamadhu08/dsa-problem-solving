// Given an array nums of n integers. Return array of sum of all subsets of the array nums. Output can be returned in any order.

function generateSubsetSums(nums) {
  const subsetSums = [];

  function generateSubsets(currentIndex, currentSubset) {
    // Base case: we have made include/exclude decisions for all elements
    if (currentIndex === nums.length) {
      let subsetSum = 0;

      for (let i = 0; i < currentSubset.length; i++) {
        subsetSum += currentSubset[i];
      }

      subsetSums.push(subsetSum);

      return;
    }

    // Choice 1: exclude nums[currentIndex]
    generateSubsets(currentIndex + 1, currentSubset);

    // Choice 2: include nums[currentIndex]
    const nextSubset = currentSubset.slice(); // copy to avoid mutating the other branch

    nextSubset.push(nums[currentIndex]); // choose current element

    generateSubsets(currentIndex + 1, nextSubset); // explore deeper
  }

  generateSubsets(0, []); // start with index 0 and an empty subset

  return subsetSums;
}

const nums = [5, 2, 1];

const result = generateSubsetSums(nums);

console.log(result);

// Time complexity: O(n * 2^n) — 2^n subsets and up to n work to sum each subset at the leaf.
// Space complexity: O(n) recursion depth + extra array copies during includes (output not counted).
