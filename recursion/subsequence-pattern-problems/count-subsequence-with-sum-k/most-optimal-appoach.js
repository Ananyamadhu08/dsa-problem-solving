// Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.

function countSubsequenceSumMostOptimal(nums, k) {
  const totalLength = nums.length;
  const middleIndex = Math.floor(totalLength / 2);

  // Split into two halves
  const leftHalf = nums.slice(0, middleIndex);
  const rightHalf = nums.slice(middleIndex);

  // Generate all subset sums for a half using recursion (with pruning)
  function generateSubsetSums(halfNums) {
    const allSums = [];
    const halfLength = halfNums.length;

    function exploreSubset(currentIndex, currentSum) {
      if (currentSum > k) return; // prune because nums are positive
      if (currentIndex === halfLength) {
        allSums.push(currentSum); // record this sum
        return;
      }
      exploreSubset(currentIndex + 1, currentSum + halfNums[currentIndex]); // include element
      exploreSubset(currentIndex + 1, currentSum); // skip element
    }

    exploreSubset(0, 0);
    return allSums;
  }

  // Generate all subset sums for both halves
  const leftSubsetSums = generateSubsetSums(leftHalf);
  const rightSubsetSums = generateSubsetSums(rightHalf);

  // Build frequency map for right sums
  const rightFreq = new Map();
  for (const sum of rightSubsetSums) {
    rightFreq.set(sum, (rightFreq.get(sum) || 0) + 1);
  }

  // Count pairs of left and right sums that add to k
  let totalWays = 0;
  for (const leftSum of leftSubsetSums) {
    const need = k - leftSum;
    totalWays += rightFreq.get(need) || 0;
  }

  return totalWays;
}

const nums = [4, 9, 2, 5, 1];

const k = 10;

const result = countSubsequenceSumMostOptimal(nums, k);

console.log(result);

// Time complexity: O(2^(n/2)) | generate and count subset sums of two halves
// Space complexity: O(2^(n/2)) | store subset sums and frequency map
