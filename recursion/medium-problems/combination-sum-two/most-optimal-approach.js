// Given collection of candidate numbers (candidates) and a integer target.Find all unique combinations in candidates where the sum is equal to the target.There can only be one usage of each number in the candidates combination and return the answer in sorted order. For example the combination [1, 1, 2] and [1, 2, 1] are not unique.

function combinationSum(candidates, target) {
  // Sort once so equal numbers are adjacent and inner combos come out non-decreasing
  const sortedCandidates = [...candidates].sort((a, b) => a - b);

  // Build [number, frequency] pairs (frequency compression)
  const numberFrequencyPairs = [];

  for (let position = 0; position < sortedCandidates.length; ) {
    const currentNumber = sortedCandidates[position];

    let frequency = 0;

    while (
      position < sortedCandidates.length &&
      sortedCandidates[position] === currentNumber
    ) {
      frequency++;
      position++;
    }

    numberFrequencyPairs.push([currentNumber, frequency]);
  }

  const allCombinations = []; // Final answer array
  const currentCombination = []; // Current path being built

  // Recurse over unique numbers; at each step choose 0..frequency copies (bounded by remaining target)
  function explore(uniqueNumberIndex, remainingTarget) {
    // Base case: exact match
    if (remainingTarget === 0) {
      allCombinations.push([...currentCombination]); // push a copy
      return;
    }

    // Base case: ran out of unique numbers
    if (uniqueNumberIndex === numberFrequencyPairs.length) {
      return;
    }

    const [currentNumber, maxFrequency] =
      numberFrequencyPairs[uniqueNumberIndex];

    // Option 1: take 0 copies of currentNumber
    explore(uniqueNumberIndex + 1, remainingTarget);

    // Option 2: take 1..maxFrequency copies, while we don't exceed remainingTarget
    let cumulativeSum = 0;

    for (
      let frequencyUsed = 1;
      frequencyUsed <= maxFrequency;
      frequencyUsed++
    ) {
      cumulativeSum += currentNumber;

      if (cumulativeSum > remainingTarget) break; // prune

      // Append one copy per iteration (keeps combination non-decreasing)
      currentCombination.push(currentNumber);

      // Move to next unique number
      explore(uniqueNumberIndex + 1, remainingTarget - cumulativeSum);
    }

    // Backtrack: remove all copies of currentNumber added in this loop
    while (
      currentCombination.length > 0 &&
      currentCombination[currentCombination.length - 1] === currentNumber
    ) {
      currentCombination.pop();
    }
  }

  explore(0, target);

  return allCombinations;
}

const candidates = [1, 1, 2];

const target = 4;

const result = combinationSum(candidates, target);

console.log(result);

// Time complexity: O(∏(freq_i+1)) + O(n log n) | branch per unique number tries 0..freq_i copies; plus initial sort
// Space complexity: O(u) | recursion depth over u unique numbers; output not counted
