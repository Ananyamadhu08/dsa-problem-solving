// Create a function to find the factorial of a given number.

function findFactorial(n) {
  if (n === 0) return 1;

  return n * findFactorial(n - 1);
}

let result = findFactorial(5);

console.log(result);
