// Given an integer and a value n, find the nth root of that integer.The nth root of a number is defined as a number when raised to the power n equals the given integer. If the nth root is not an integer, return -1.

function checkExponentiation(base, exponent, num) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= base;

    if (result > num) return 2;
  }

  if (result == num) return 1;

  return 0;
}

function findNthRoot(num, exponent) {
  let low = 1;
  let high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const exponentialValue = checkExponentiation(mid, exponent, num);

    if (exponentialValue == 1) {
      return mid;
    } else if (exponentialValue == 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const num = 27;

const exponent = 3;

const result = findNthRoot(num, exponent);

console.log(result);

// Time complexity: O(log(num) * exponent)
// Space complexity: O(1)
