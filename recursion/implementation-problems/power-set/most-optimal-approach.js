// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array. Do not include the duplicates in the answer.

function generateSubsets(nums) {
  const allSubsets = [];

  function explore(startIndex, currentSubset) {
    allSubsets.push(currentSubset.slice());

    for (let nextIndex = startIndex; nextIndex < nums.length; nextIndex++) {
      currentSubset.push(nums[nextIndex]);
      explore(nextIndex + 1, currentSubset);
      currentSubset.pop();
    }
  }

  explore(0, []);
  return allSubsets;
}

const numArr = [1, 2, 3];

const result = generateSubsets(numArr);

console.log(result);

// Time complexity: O(2^n * n) | 2^n subsets, copying each snapshot costs up to O(n)
// Space complexity: O(2^n * n) | to store all subsets, recursion depth O(n)
