// Create a function that takes a number 'n' and prints the fibonacci series up to the nth term.

function findFibonacci(n) {
  if (n <= 1) return n;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

function printFibonacciSeries(n) {
  for (let i = 0; i <= n; i++) {
    console.log(findFibonacci(i));
  }
}

printFibonacciSeries(5);
