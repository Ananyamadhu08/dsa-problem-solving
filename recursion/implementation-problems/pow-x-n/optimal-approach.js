// Implement the power function pow(x, n), which calculates x raised to n (x^n).
// In output print 6 digits places after decimal point.

function pow(x, n) {
  // Base case: any number to the power 0 is 1
  if (n === 0) return 1.0;

  // If exponent is negative, convert to positive and take reciprocal
  if (n < 0) {
    return 1 / pow(x, -n);
  }

  // Recursively compute half = x^(n/2)
  let half = pow(x, Math.floor(n / 2));

  // If n is even: x^n = half * half
  // If n is odd:  x^n = half * half * x
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}

let result = pow(2, 10);

console.log(result);

// Time complexity: O(log |n|)
// Space complexity: O(log |n|)
