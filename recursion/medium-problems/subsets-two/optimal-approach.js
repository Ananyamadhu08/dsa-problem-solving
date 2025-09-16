// Given an integer array nums, which can have duplicate entries, provide the power set. Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.

function generatePowerSet(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  const subsets = [];

  function generateSubsets(startIndex, currentPath) {
    // Record the current subset (always valid)
    subsets.push([...currentPath]);

    // Explore choices starting from startIndex
    for (let index = startIndex; index < sortedNums.length; index++) {
      // Skip duplicates at the same recursion depth
      if (index > startIndex && sortedNums[index] === sortedNums[index - 1]) {
        continue;
      }

      // Choose current element
      currentPath.push(sortedNums[index]);

      // Recurse with next start index (each element used at most once per position)
      generateSubsets(index + 1, currentPath);

      // Backtrack to explore other choices
      currentPath.pop();
    }
  }

  generateSubsets(0, []);

  return subsets;
}

const nums = [1, 2, 2];

const result = generatePowerSet(nums);

console.log(result);

// Time complexity: O(n * 2^n) — up to 2^n subsets, and copying each subset costs up to O(n).
// Space complexity: O(n) — recursion depth (excluding the output list).
