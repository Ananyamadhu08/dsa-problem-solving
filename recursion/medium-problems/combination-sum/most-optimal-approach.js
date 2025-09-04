// Provided with a goal integer target and an array of unique integer candidates, provide a list of all possible combinations of candidates in which the selected numbers add up to the target. The combinations can be returned in any order. A candidate may be selected from the pool an infinite number of times. There are two distinct combinations if the frequency of at least one of the selected figures differs. The test cases are created so that, for the given input, there are fewer than 150 possible combinations that add up to the target. If there is no possible subsequences then return empty vector.

function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b); // optional: predictable order and simple pruning if added

  const memo = new Map(); // key: "index#remainingTarget" -> array of combinations

  function explore(index, remainingTarget) {
    if (remainingTarget === 0) return [[]]; // one valid way: no more numbers needed

    if (remainingTarget < 0 || index === candidates.length) return []; // no valid way

    const key = `${index}#${remainingTarget}`; // inline memo key

    if (memo.has(key)) return memo.get(key); // return cached answer

    const candidate = candidates[index]; // current number to consider

    const allCombinations = []; // collector for this state

    // include the candidate (reuse allowed, so stay at same index)
    if (candidate <= remainingTarget) {
      const combinationsWithCandidate = explore(
        index,
        remainingTarget - candidate
      );

      for (const combination of combinationsWithCandidate) {
        allCombinations.push([candidate, ...combination]); // prepend candidate
      }
    }

    // exclude the candidate (move to next index)
    const combinationsWithoutCandidate = explore(index + 1, remainingTarget);

    for (const combination of combinationsWithoutCandidate) {
      allCombinations.push([...combination]); // copy for safety
    }

    memo.set(key, allCombinations); // cache and return

    return allCombinations;
  }

  return explore(0, target);
}

const candidates = [2, 3, 5, 4];

const target = 7;

const result = combinationSum(candidates, target);

console.log(result);

// Time complexity: O(n * T * avgCombinations) | DP states ~ n*T; time dominated by composing and merging all returned combinations
// Space complexity: O(n * T * avgCombinations) | memo stores combinations per state; recursion depth O(n); output not counted by convention
