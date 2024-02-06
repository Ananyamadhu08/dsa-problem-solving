// Create a function to print the following pattern -
// *********
//  *******
//   *****
//    ***
//     *

function printPattern(n) {
  for (i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
      row += " ";
    }

    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

printPattern(5);
