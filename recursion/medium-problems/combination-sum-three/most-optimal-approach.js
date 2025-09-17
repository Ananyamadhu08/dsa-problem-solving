// Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:
// - There is only use of numerals 1 through 9.
// - A single use is made of each number.
// Return list of every feasible combination that is allowed. The combinations can be returned in any order, but the list cannot have the same combination twice.

function combinationSum(k, target) {
  const allCombinations = [];

  // Check if target is even achievable with exactly k distinct numbers from one to nine

  const minRequiredSum = (k * (k + 1)) / 2; // Smallest total using the k smallest numbers

  const maxRequiredSum = (k * (19 - k)) / 2; // Largest total using the k largest numbers

  // Return early when target falls outside the globally possible range
  if (target < minRequiredSum || target > maxRequiredSum) {
    return allCombinations;
  }

  // Explore combinations in strictly increasing order and prune impossible branches early
  function backtrack(currentNumber, numbersLeft, remainingSum, currentCombo) {
    // Accept a combination only when we picked k numbers and the remaining sum is zero
    if (numbersLeft === 0) {
      if (remainingSum === 0) {
        allCombinations.push([...currentCombo]);
      }

      return;
    }

    // Compute the smallest sum still achievable by taking numbersLeft consecutive values starting at currentNumber
    const minPossibleSum =
      (numbersLeft * (2 * currentNumber + numbersLeft - 1)) / 2;

    // Prune when even the tiniest legal picks would already exceed the remaining sum
    if (remainingSum < minPossibleSum) return;

    // Compute the largest sum still achievable by taking the numbersLeft largest values within one to nine
    const maxPossibleSum = (numbersLeft * (19 - numbersLeft)) / 2;

    // Prune when even the biggest legal picks cannot reach the remaining sum
    if (remainingSum > maxPossibleSum) return;

    // Try each next candidate while ensuring enough numbers remain to fill all slots
    for (let num = currentNumber; num <= 10 - numbersLeft; num++) {
      // Stop the loop as soon as num exceeds remainingSum because larger numbers will overshoot too
      if (num > remainingSum) break;

      // Choose the current number and recurse to pick the rest
      currentCombo.push(num);

      backtrack(num + 1, numbersLeft - 1, remainingSum - num, currentCombo);

      currentCombo.pop(); // Undo choice for the next candidate
    }
  }

  // Start the search from one needing k picks to reach the target
  backtrack(1, k, target, []);

  return allCombinations;
}

const k = 3;

const target = 7;

const result = combinationSum(k, target);

console.log(result);

// Time complexity: O(C(9, k)) — Explore only feasible k-combinations from 1..9 thanks to count, sum, and bound pruning which cuts impossible branches early.
// Space complexity: O(k) — Use at most k stack frames for the current combination during recursion not counting the output list.

/*
  =========================================================================================
  FORMULA NOTES -
  
  BASE FORMULA A — Sum of the first k natural numbers
  ─────────────────────────────────────────────────────────────────────────────────────────
  Idea:
    We want a closed form for 1 + 2 + 3 + … + k so we can quickly bound what k picks can add up to
  
    ┌────────────────────────────────────┐
    │   sumFirstK(k) = k × (k + 1) ÷ 2   │
    └────────────────────────────────────┘
  
  Explanation:
    Pair the first and last terms and notice every pair sums to k + 1 and there are k terms in total
    Therefore the total is k × (k + 1) ÷ 2 which we will reuse several times below
  
  
  BASE FORMULA B — Sum of any consecutive integer sequence
  ─────────────────────────────────────────────────────────────────────────────────────────
  Idea:
    We want the sum of all integers from first to last inclusive where first ≤ last
  
    ┌──────────────────────────────────────────────────────────────────────┐
    │   numberOfTerms = last − first + 1                                   │
    │   sumConsecutive(first, last) = numberOfTerms × (first + last) ÷ 2   │
    └──────────────────────────────────────────────────────────────────────┘
  
  Explanation:
    Pair the smallest and largest then the next smallest and next largest and so on
    Each pair sums to first + last and there are numberOfTerms ÷ 2 such pairs so the total is as shown
  
  
  -----------------------------------------------------------------------------------------
  HOW THE FOUR FORMULAS IN THE CODE COME FROM THE BASE FORMULAS
  -----------------------------------------------------------------------------------------
  
  We keep code friendly names so mapping is obvious
    k is the total size required at the root
    currentNumber is the smallest allowed next value to keep the combo increasing
    numbersLeft is how many picks remain to reach size k
    remainingSum is how much total is still needed to hit target
  
  
  1) minRequiredSum — global lower bound before any recursion
  ─────────────────────────────────────────────────────────────────────────────────────────
  Goal:
    Find the smallest possible total using exactly k distinct numbers in 1..9
  
  Construction:
    Choose the k smallest numbers which are 1 2 … k
  
  Plug into BASE FORMULA A:
    Replace k in sumFirstK with our k
    This directly gives the minimal total for any k picks
  
    ┌────────────────────────────────────────┐
    │   minRequiredSum = (k × (k + 1)) ÷ 2   │
    └────────────────────────────────────────┘
  
  Meaning:
    If target is less than this value then no k distinct numbers can sum to target
  
  
  2) maxRequiredSum — global upper bound before any recursion
  ─────────────────────────────────────────────────────────────────────────────────────────
  Goal:
    Find the largest possible total using exactly k distinct numbers in 1..9
  
  Construction:
    Choose the k largest numbers which are 9 8 … (10 − k)
  
  Plug into BASE FORMULA B step by step:
    first = 10 − k
    last  = 9
    numberOfTerms = last − first + 1 = 9 − (10 − k) + 1 = k
    sumConsecutive(first, last) = numberOfTerms × (first + last) ÷ 2
    sum = k × ((10 − k) + 9) ÷ 2
    Simplify inside the parentheses to get 19 − k
  
    ┌─────────────────────────────────────────┐
    │   maxRequiredSum = (k × (19 − k)) ÷ 2   │
    └─────────────────────────────────────────┘
  
  Meaning:
    If target is greater than this value then even the largest k numbers cannot reach it
  
  
  3) minPossibleSum — per node lower bound during recursion
  ─────────────────────────────────────────────────────────────────────────────────────────
  Goal:
    From the current state the next allowed value is currentNumber and we must still pick numbersLeft values
    We need the smallest additional sum we could add if we always take the smallest legal values
  
  Construction:
    Take the consecutive run currentNumber  currentNumber + 1  …  currentNumber + numbersLeft − 1
  
  Plug into BASE FORMULA B with descriptive names:
    first = currentNumber
    last  = currentNumber + numbersLeft − 1
    numberOfTerms = numbersLeft
    sumConsecutive(first, last) = numbersLeft × (first + last) ÷ 2
    Replace first and last and then collect like terms
  
    ┌──────────────────────────────────────────────────────────────────────────────┐
    │   minPossibleSum = numbersLeft × (2 × currentNumber + numbersLeft − 1) ÷ 2   │
    └──────────────────────────────────────────────────────────────────────────────┘
  
  Meaning:
    If remainingSum is smaller than this value then even the tiniest legal future picks would overshoot
    Therefore the branch is impossible and we prune immediately
  
  
  4) maxPossibleSum — per node upper bound during recursion
  ─────────────────────────────────────────────────────────────────────────────────────────
  Goal:
    From the current state we still need numbersLeft picks and we want the largest additional sum we could add
  
  Construction:
    Take the numbersLeft largest values in 1..9 which are 9 8 … (10 − numbersLeft)
  
  Plug into BASE FORMULA B with descriptive names:
    first = 10 − numbersLeft
    last  = 9
    numberOfTerms = numbersLeft
    sumConsecutive(first, last) = numbersLeft × (first + last) ÷ 2
    Replace first and last and then simplify inside the parentheses to get 19 − numbersLeft
  
    ┌───────────────────────────────────────────────────────────┐
    │   maxPossibleSum = numbersLeft × (19 − numbersLeft) ÷ 2   │
    └───────────────────────────────────────────────────────────┘
  
  Meaning:
    If remainingSum is larger than this value then even the biggest legal future picks cannot catch up
    Therefore the branch is impossible and we prune immediately
  
  
  -----------------------------------------------------------------------------------------
  WHY THE LOOP LIMIT num ≤ 10 − numbersLeft IS CORRECT
  -----------------------------------------------------------------------------------------
  We must still choose numbersLeft values from the remaining range num to nine
  The available count is 9 − num + 1 and it must be at least numbersLeft
  So 9 − num + 1 ≥ numbersLeft which rearranges to num ≤ 10 − numbersLeft
  This prevents starting so late that there are not enough values left to fill the slots
  
  =========================================================================================
  */
