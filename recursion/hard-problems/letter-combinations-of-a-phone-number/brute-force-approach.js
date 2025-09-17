// Given a string consisting of digits from 2 to 9 (inclusive). Return all possible letter combinations that the number can represent. Mapping of digits to letters is given below.

/*
Phone Keypad Mapping:

  ┌─────────┬─────────┬─────────┐
  │    1    │  2 abc  │  3 def  │
  ├─────────┼─────────┼─────────┤
  │  4 ghi  │  5 jkl  │  6 mno  │
  ├─────────┼─────────┼─────────┤
  │ 7 pqrs  │  8 tuv  │ 9 wxyz  │
  ├─────────┼─────────┼─────────┤
  │    *    │    0    │    #    │
  └─────────┴─────────┴─────────┘

Digits 2–9 are valid inputs:
- 2 → "abc"
- 3 → "def"
- 4 → "ghi"
- 5 → "jkl"
- 6 → "mno"
- 7 → "pqrs"
- 8 → "tuv"
- 9 → "wxyz"
*/

function letterCombinationsBrute(digits) {
  if (!digits || digits.length === 0) return [];

  // Phone keypad mapping with numeric keys
  const keypad = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const allCombinations = [];

  function buildCombinations(position, builtWord) {
    // Base case: if all digits are used, save the word
    if (position === digits.length) {
      allCombinations.push(builtWord);
      return;
    }

    const digitNumber = Number(digits[position]); // current digit as number
    const letters = keypad[digitNumber]; // mapped letters

    // Recurse for each possible letter
    for (let i = 0; i < letters.length; i++) {
      buildCombinations(position + 1, builtWord + letters[i]);
    }
  }

  buildCombinations(0, ""); // start recursion

  return allCombinations;
}

const digits = "34";

const result = letterCombinationsBrute(digits);

console.log(result);

// Time complexity: O(∏ kᵢ), where kᵢ is the number of letters for digit i. Example: for "34", that's 3 × 3 = 9 total combinations.
// Space complexity: O(n) recursion depth (n = digits.length) + output storage.
