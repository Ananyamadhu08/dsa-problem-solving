// Create a function to print numbers from n to 1.

function printNumbersReverse(i, n) {
  if (i < 1) return;

  console.log(i);

  printNumbersReverse(i - 1, n);
}

printNumbersReverse(5, 5);
