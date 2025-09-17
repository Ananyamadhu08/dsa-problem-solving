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

function phoneLetterCombinations(digits) {
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
  const buffer = new Array(digits.length); // pre-sized character tray

  function buildCombinations(position) {
    // Base case: if all digits are used, snapshot the buffer
    if (position === digits.length) {
      allCombinations.push(buffer.join(""));
      return;
    }

    // Choices for this digit (split into two variables for clarity)
    const currentDigit = Number(digits[position]); // current digit as number
    const letters = keypad[currentDigit]; // mapped letters, e.g., "def"

    // Recurse for each possible letter (write in place, then go deeper)
    for (let i = 0; i < letters.length; i++) {
      buffer[position] = letters[i]; // place letter at this slot
      buildCombinations(position + 1); // fill the next slot
    }

    // No explicit undo needed: next write overwrites the current slot
  }

  buildCombinations(0); // start recursion

  return allCombinations;
}

const digits = "34";

const result = phoneLetterCombinations(digits);

console.log(result);

// Time complexity: O(∏ kᵢ), where kᵢ is the number of letters for digit i. For "34", that's 3 × 3 = 9 total combinations.
// Space complexity: O(n) recursion depth + O(n) buffer + output storage (n = digits.length).
