// Create a function to print the following pattern -
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function printPattern(n) {
  for (let i = 1; i <= n * 2 - 1; i++) {
    let row = "";
    let stars = i;

    if (stars > n) {
      stars = 2 * n - i;
    }

    for (let j = 0; j < stars; j++) {
      row += "*";
    }

    for (let k = 0; k < (n - stars) * 2; k++) {
      row += " ";
    }

    for (let m = 0; m < stars; m++) {
      row += "*";
    }

    console.log(row);
  }
}

printPattern(5);
