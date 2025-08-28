// Given an array nums and an integer k. Return true if there exist subsequences such that the sum of all elements in subsequences is equal to k else false.

function checkSubsequenceSum(nums, k) {
  const totalLength = nums.length;
  const middleIndex = Math.floor(totalLength / 2);

  // Split the array into two halves
  const leftHalf = nums.slice(0, middleIndex);
  const rightHalf = nums.slice(middleIndex);

  // Generate all subset sums for a half using recursion
  function generateSubsetSums(halfNums) {
    const allSums = [];
    const halfLength = halfNums.length;

    function exploreSubset(currentIndex, currentSum) {
      // Stop exploring if sum already exceeds k (safe because nums are positive)
      if (currentSum > k) return;

      // If we used all elements from this half, record the sum
      if (currentIndex === halfLength) {
        allSums.push(currentSum);
        return;
      }

      // Option 1: include this element in the sum
      exploreSubset(currentIndex + 1, currentSum + halfNums[currentIndex]);

      // Option 2: skip this element
      exploreSubset(currentIndex + 1, currentSum);
    }

    // Start with index 0 and sum 0
    exploreSubset(0, 0);

    return allSums;
  }

  // Generate all subset sums for both halves
  const leftSubsetSums = generateSubsetSums(leftHalf);
  const rightSubsetSums = generateSubsetSums(rightHalf);

  // Put right sums in a Set for fast lookups
  const rightSumsSet = new Set(rightSubsetSums);

  // For each left sum, check if it directly hits k or if there’s a matching right sum that makes up the difference
  for (const leftSum of leftSubsetSums) {
    if (leftSum === k) return true; // left side alone matches

    const requiredRightSum = k - leftSum;

    if (rightSumsSet.has(requiredRightSum)) return true; // found complement
  }

  // No combination worked → return false
  return false;
}

const nums = [1, 2, 3, 4, 5];

const k = 8;

const result = checkSubsequenceSum(nums, k);

console.log(result);

// Time complexity: O(2^(n/2)) | generate and check all subset sums of two halves
// Space complexity: O(2^(n/2)) | store all subset sums in arrays/sets
