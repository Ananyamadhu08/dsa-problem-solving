// Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:
// - There is only use of numerals 1 through 9.
// - A single use is made of each number.
// Return list of every feasible combination that is allowed. The combinations can be returned in any order, but the list cannot have the same combination twice.

function combinationSum3_Optimal(k, target) {
  const allCombinations = [];

  function backtrack(currentNumber, numbersLeft, remainingSum, currentCombo) {
    // Base case: picked exactly k numbers
    if (numbersLeft === 0) {
      if (remainingSum === 0) {
        allCombinations.push([...currentCombo]);
      }

      return;
    }

    // Loop through possible next choices
    for (let num = currentNumber; num <= 10 - numbersLeft; num++) {
      // Prune: if num is too large, stop exploring further
      if (num > remainingSum) break;

      currentCombo.push(num);

      backtrack(num + 1, numbersLeft - 1, remainingSum - num, currentCombo);

      currentCombo.pop(); // undo choice for next iteration
    }
  }

  backtrack(1, k, target, []);

  return allCombinations;
}

const k = 3;

const target = 7;

const result = combinationSum3_Optimal(k, target);

console.log(result);

// Time complexity: O(C(9, k)) — we only explore valid combinations of size k out of 9 with pruning to cut impossible branches.
// Space complexity: O(k) — recursion depth for the currentCombo stack (not counting output storage).
