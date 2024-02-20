// Create a function to find the factorial of a given number.

function findFactorial(n, product) {
  if (n < 1) return product;

  return findFactorial(n - 1, product * n);
}

let result = findFactorial(5, 1);

console.log(result);
