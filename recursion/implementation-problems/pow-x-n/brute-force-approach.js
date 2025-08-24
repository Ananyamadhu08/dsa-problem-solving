// Implement the power function pow(x, n), which calculates the x raised to n i.e. x^n. In output print 6 digits places after decimal point.

function pow(x, n) {
  // Base case: any number to the power 0 is 1
  if (n === 0) return 1.0;

  // If exponent is negative, convert to positive and take reciprocal
  if (n < 0) {
    return 1 / pow(x, -n);
  }

  // Recursive step: multiply x by the result of x^(n-1)
  return x * pow(x, n - 1);
}

let result = pow(2, 3);

console.log(result);

// Time complexity: O(|n|)
// Space complexity: O(|n|)
