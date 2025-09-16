// Provided with a goal integer target and an array of unique integer candidates, provide a list of all possible combinations of candidates in which the selected numbers add up to the target. The combinations can be returned in any order. A candidate may be selected from the pool an infinite number of times. There are two distinct combinations if the frequency of at least one of the selected figures differs. The test cases are created so that, for the given input, there are fewer than 150 possible combinations that add up to the target. If there is no possible subsequences then return empty vector.

function combinationSum(candidates, target) {
  const allCombinations = [];

  candidates.sort((a, b) => a - b); // sort for predictable order (optional)

  function backtrack(candidateIndex, remainingTarget, currentCombination) {
    if (remainingTarget === 0) {
      allCombinations.push([...currentCombination]); // record a valid combination
      return;
    }

    if (remainingTarget < 0) return; // prune when we overshoot

    for (let index = candidateIndex; index < candidates.length; index++) {
      const chosenNumber = candidates[index]; // choose a number at or after candidateIndex

      currentCombination.push(chosenNumber); // make the choice

      backtrack(index, remainingTarget - chosenNumber, currentCombination); // reuse allowed, so index stays the same

      currentCombination.pop(); // undo the choice (backtrack)
    }
  }

  backtrack(0, target, []);

  return allCombinations;
}

const candidates = [2, 3, 5, 4];

const target = 7;

const result = combinationSum(candidates, target);

console.log(result);

// Time complexity: O(m^(T/minValue)) | m choices per step, depth up to T/minValue; avoids permutations via start index
// Space complexity: O(T/minValue) | recursion depth proportional to longest combination; output not counted
