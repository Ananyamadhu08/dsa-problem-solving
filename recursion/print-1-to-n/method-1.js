// Create a function to print numbers from 1 to n.

function printNumbers(i, n) {
  if (i > n) return;

  console.log(i);

  printNumbers(i + 1, n);
}

printNumbers(1, 5);
