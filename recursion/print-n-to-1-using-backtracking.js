// Create a function to print numbers from n to 1 using backtracking.

function printNumbersReverse(n) {
  if (n === 0) return;

  console.log(n);

  printNumbersReverse(n - 1);
}

printNumbersReverse(5);
