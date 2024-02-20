// Create a function to find the factorial of a given number.

function findFactorial(n, currNum = 1) {
  if (currNum > n) return 1;

  return currNum * findFactorial(n, currNum + 1);
}

let result = findFactorial(5);

console.log(result);
