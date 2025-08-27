// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array. Do not include the duplicates in the answer.

function generateSubsets(nums) {
  const allSubsets = []; // stores all subsets we generate

  // Recursively explore subsets starting from index `startIndex`
  function explore(startIndex, currentSubset) {
    // Record a snapshot of the current subset (it's always a valid subset)
    allSubsets.push(currentSubset.slice());

    // Try including each element starting from `startIndex`
    for (let position = startIndex; position < nums.length; position++) {
      // Choose: include nums[position] in the current subset
      currentSubset.push(nums[position]);

      // Explore: recursively build subsets with nums[position] included
      explore(position + 1, currentSubset);

      // Un-choose (backtrack): remove nums[position] and try the next element
      currentSubset.pop();
    }
  }

  // Start exploring from index 0 with an initially empty subset
  explore(0, []);

  return allSubsets;
}

const numArr = [1, 2, 3];

const result = generateSubsets(numArr);

console.log(result);

// Time complexity: O(2^n * n) | 2^n subsets, copying each snapshot costs up to O(n)
// Space complexity: O(2^n * n) | to store all subsets, recursion depth O(n)
