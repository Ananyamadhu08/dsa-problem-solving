// Create a function to print numbers from 1 to n using backtracking.

function printNumbers(n) {
  if (n === 0) return;

  printNumbers(n - 1);

  console.log(n);
}

printNumbers(5);
