// Given an integer array nums, which can have duplicate entries, provide the power set. Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.

function generatePowerSet(nums) {
  const allSubsets = [];

  const seenSubsets = new Set(); // tracks subsets we have already recorded

  function generateSubsets(currentIndex, currentSubset) {
    // Base case: we have made include/exclude decisions for all elements
    if (currentIndex === nums.length) {
      // Create a canonical key so identical subsets map to the same string
      const key = [...currentSubset].sort((a, b) => a - b).join(",");

      if (!seenSubsets.has(key)) {
        seenSubsets.add(key);
        allSubsets.push(currentSubset); // record this subset
      }

      return;
    }

    // Choice 1: exclude nums[currentIndex]
    generateSubsets(currentIndex + 1, currentSubset);

    // Choice 2: include nums[currentIndex]
    const nextSubset = currentSubset.slice(); // copy to avoid mutating other branch

    nextSubset.push(nums[currentIndex]); // choose current element

    generateSubsets(currentIndex + 1, nextSubset); // explore deeper
  }

  generateSubsets(0, []); // start recursion with index 0 and an empty subset

  return allSubsets;
}

const nums = [1, 2, 2];

const result = generatePowerSet(nums);

console.log(result);

// Time complexity: O(n * 2^n) — 2^n subsets are generated, each requires up to n work to sort/join for the key.
// Space complexity: O(n * 2^n) — storing up to 2^n subsets of size n plus recursion depth O(n).
