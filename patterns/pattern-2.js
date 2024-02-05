// Create a function to print the following pattern -
// *
// * *
// * * *
// * * * *
// * * * * *

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printPattern(5);
