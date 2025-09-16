// Given an integer array nums, which can have duplicate entries, provide the power set. Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.

function generatePowerSet(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  // Compress into [value, frequency] pairs
  const valueFrequencies = [];

  for (let position = 0; position < sortedNums.length; ) {
    const value = sortedNums[position];
    let frequency = 0;

    while (position < sortedNums.length && sortedNums[position] === value) {
      position++;
      frequency++;
    }

    valueFrequencies.push([value, frequency]);
  }

  const allSubsets = [];
  const subset = [];

  // Recursively build subsets by deciding how many copies of each unique value to include
  function generateSubsets(uniqueIndex) {
    if (uniqueIndex === valueFrequencies.length) {
      allSubsets.push([...subset]); // record a full subset
      return;
    }

    const [value, frequency] = valueFrequencies[uniqueIndex];

    // Try including 0..frequency copies of this value
    for (let count = 0; count <= frequency; count++) {
      // Add 'count' copies
      for (let j = 0; j < count; j++) subset.push(value);

      // Recurse to next unique value
      generateSubsets(uniqueIndex + 1);

      // Backtrack: remove 'count' copies
      for (let j = 0; j < count; j++) subset.pop();
    }
  }

  generateSubsets(0);

  return allSubsets;
}

const nums = [1, 2, 2];

const result = generatePowerSet(nums);

console.log(result);

// Time complexity: O(n * 2^n) — generate up to 2^n subsets; copying each subset costs up to O(n).
// Space complexity: O(n) — recursion depth equals number of unique values (output not counted).
