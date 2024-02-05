// Create a function to print the following pattern -
// * * * * *
// * * * *
// * * *
// * *
// *

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    row = "";
    for (let j = 0; j < n - i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printPattern(5);
