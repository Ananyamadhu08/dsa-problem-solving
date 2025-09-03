// Provided with a goal integer target and an array of unique integer candidates, provide a list of all possible combinations of candidates in which the selected numbers add up to the target. The combinations can be returned in any order. A candidate may be selected from the pool an infinite number of times. There are two distinct combinations if the frequency of at least one of the selected figures differs. The test cases are created so that, for the given input, there are fewer than 150 possible combinations that add up to the target. If there is no possible subsequences then return empty vector.

function combinationSum(candidates, target) {
  const results = [];
  const seen = new Set();

  function recurse(currentCombo, currentSum) {
    // Base case: sum exactly matches target
    if (currentSum === target) {
      const sorted = [...currentCombo].sort((a, b) => a - b); // canonical form
      const key = sorted.join(","); // convert to string key
      if (!seen.has(key)) {
        seen.add(key);
        results.push(sorted); // save sorted unique combo
      }
      return;
    }

    // Base case: sum exceeded target, stop exploring
    if (currentSum > target) return;

    // Try each candidate again (causes permutations we dedupe later)
    for (const value of candidates) {
      currentCombo.push(value); // choose this candidate
      recurse(currentCombo, currentSum + value); // explore deeper
      currentCombo.pop(); // backtrack
    }
  }

  recurse([], 0); // start with empty combo and sum 0
  return results;
}

const candidates = [2, 3, 5, 4];

const target = 7;

const result = combinationSum(candidates, target);

console.log(result);

// Time complexity: O(m^(target/min)) | m choices per step, depth up to target/min, sort O(L log L) per valid combo
// Space complexity: O(target/min) | recursion depth proportional to longest combo, output not counted
