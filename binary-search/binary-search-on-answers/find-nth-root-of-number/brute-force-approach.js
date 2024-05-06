// Given an integer and a value n, find the nth root of that integer.The nth root of a number is defined as a number when raised to the power n equals the given integer. If the nth root is not an integer, return -1.

function computeExponentiation(base, exponent) {
  let result = 1;
  let currentBase = base;

  while (exponent > 0) {
    if (exponent % 2) {
      exponent--;

      result *= currentBase;
    } else {
      exponent /= 2;

      currentBase *= currentBase;
    }
  }

  return result;
}

function findNthRoot(num, exponent) {
  for (let i = 1; i <= num; i++) {
    let exponentialValue = computeExponentiation(i, exponent);

    if (exponentialValue === num) {
      return i;
    } else if (exponentialValue > num) {
      break;
    }
  }

  return -1;
}

const num = 27;

const exponent = 3;

const result = findNthRoot(num, exponent);

console.log(result);

// Time complexity: O(N * log(exponent))
// Space complexity: O(1)
