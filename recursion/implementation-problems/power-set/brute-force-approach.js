// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array. Do not include the duplicates in the answer.

function generateSubsets(nums) {
  const allSubsets = [];
  const currentSubset = []; // the subset we're currently building

  // Recursively explore subsets starting from index `startIndex`
  function exploreSubsets(startIndex) {
    // Record a snapshot of the current subset
    allSubsets.push(currentSubset.slice());

    // Try including each element from startIndex onward
    for (let position = startIndex; position < nums.length; position++) {
      // Choose: include nums[position]
      currentSubset.push(nums[position]);

      // Explore: move to the next position
      exploreSubsets(position + 1);

      // Un-choose (backtrack): remove last picked element
      currentSubset.pop();
    }
  }

  // Start exploring from index 0 with an empty subset
  exploreSubsets(0);

  return allSubsets;
}

const result = generateSubsets([1, 2, 3]);

console.log(result);

// Time complexity: O(2^n * n) | (2^n subsets and up to n to copy each subset)
// Space complexity: O(2^n * n) | for output and recursion depth O(n)
