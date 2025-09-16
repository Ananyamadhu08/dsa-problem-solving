// Given an array nums of n integers. Return array of sum of all subsets of the array nums. Output can be returned in any order.

function generateSubsetSumsHalf(nums) {
  const middleIndex = Math.floor(nums.length / 2);

  const leftHalf = nums.slice(0, middleIndex);
  const rightHalf = nums.slice(middleIndex);

  // Recursively generate all subset sums for one half
  function subsetSumsForHalf(halfNums) {
    const sums = [];

    function explore(currentIndex, currentSum) {
      if (currentIndex === halfNums.length) {
        sums.push(currentSum);
        return;
      }

      // Skip current element
      explore(currentIndex + 1, currentSum);

      // Include current element
      explore(currentIndex + 1, currentSum + halfNums[currentIndex]);
    }

    explore(0, 0);

    return sums;
  }

  const leftSums = subsetSumsForHalf(leftHalf);
  const rightSums = subsetSumsForHalf(rightHalf);

  // Combine every left sum with every right sum
  const allSubsetSums = [];

  for (const leftSum of leftSums) {
    for (const rightSum of rightSums) {
      allSubsetSums.push(leftSum + rightSum);
    }
  }

  return allSubsetSums;
}

const nums = [5, 2, 1];

const result = generateSubsetSumsHalf(nums);

console.log(result);

// Time complexity: O(2^n) — left half O(2^(n/2)) + right half O(2^(n/2)) + combining O(2^(n/2)*2^(n/2)) = O(2^n).
// Space complexity: O(2^(n/2)) — store leftSums and rightSums plus recursion depth O(n), output not counted.
