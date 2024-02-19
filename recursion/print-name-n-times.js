// Create a function that prints a name 'n' times using recursion.

function printName(n, name) {
  if (n === 0) return;

  console.log(name);

  printName(n - 1, name);
}

printName(5, "Ananya");
