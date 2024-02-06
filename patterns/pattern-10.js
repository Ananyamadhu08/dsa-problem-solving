// Create a function to print the following pattern -
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function printPattern(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";
    let stars = i;

    if (stars > n) {
      stars = 2 * n - i;
    }

    for (let j = 1; j <= stars; j++) {
      row += "*";
    }

    console.log(row);
  }
}

printPattern(5);
