// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array. Do not include the duplicates in the answer.

function generateSubsets(nums) {
  const allSubsets = []; // where we'll store every subset

  // Recursively explore subsets by deciding include/exclude for each index
  function explore(index, currentSubset) {
    // Base case: processed all elements, record the current subset snapshot
    if (index === nums.length) {
      allSubsets.push(currentSubset.slice());
      return;
    }

    // choice 1: exclude nums[index]
    explore(index + 1, currentSubset);

    // choice 2: include nums[index]
    currentSubset.push(nums[index]); // choose the current element

    explore(index + 1, currentSubset); // explore with it included

    currentSubset.pop(); // backtrack: undo the choice
  }

  // Start exploring from index 0 with an empty subset
  explore(0, []);

  return allSubsets;
}

const numArr = [1, 2, 3];

const result = generateSubsets(numArr);

console.log(result);

// Time complexity: O(2^n * n) | (2^n subsets and up to n to copy each subset)
// Space complexity: O(2^n * n) | for output and recursion depth O(n)
