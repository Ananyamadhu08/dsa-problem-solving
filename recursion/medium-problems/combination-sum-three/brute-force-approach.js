// Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:
// - There is only use of numerals 1 through 9.
// - A single use is made of each number.
// Return list of every feasible combination that is allowed. The combinations can be returned in any order, but the list cannot have the same combination twice.

function combinationSum(k, target) {
  const allCombinations = [];

  function explore(currentNumber, chosenNumbers, currentSum) {
    // Base case: we have considered numbers 1..9
    if (currentNumber === 10) {
      // Accept only if size == k and sum == target
      if (chosenNumbers.length === k && currentSum === target) {
        allCombinations.push([...chosenNumbers]);
      }

      return;
    }

    // Choice 1: skip currentNumber
    explore(currentNumber + 1, chosenNumbers, currentSum);

    // Choice 2: take currentNumber (only if we still have room in chosenNumbers)
    if (chosenNumbers.length < k) {
      chosenNumbers.push(currentNumber);

      explore(currentNumber + 1, chosenNumbers, currentSum + currentNumber);

      chosenNumbers.pop(); // backtrack
    }
  }

  explore(1, [], 0);

  return allCombinations;
}

const k = 3;

const target = 7;

const result = combinationSum(k, target);

console.log(result);

// Time complexity: O(2^9) → Each number from 1..9 has two choices (take/skip). For each leaf, we check size/sum, so ~512 states total.
// Space complexity: O(k) recursion depth for the chosenNumbers stack + output storage.
