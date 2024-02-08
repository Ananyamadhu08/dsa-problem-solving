// Create a function to print the following pattern -
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += "*";
    }

    for (let k = 0; k < 2 * i; k++) {
      row += " ";
    }

    for (let m = 0; m < n - i; m++) {
      row += "*";
    }

    console.log(row);
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
      row += "*";
    }

    for (let k = 0; k < 2 * n - 2 * i; k++) {
      row += " ";
    }

    for (let m = 0; m < i; m++) {
      row += "*";
    }

    console.log(row);
  }
}

printPattern(5);
