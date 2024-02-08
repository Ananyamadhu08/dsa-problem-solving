// Create a function to print the following pattern -
//    A
//   ABA
//  ABCBA
// ABCDCBA

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    for (let k = 0; k <= i; k++) {
      row += String.fromCharCode(65 + k);
    }

    for (let m = i - 1; m >= 0; m--) {
      row += String.fromCharCode(65 + m);
    }

    console.log(row);
  }
}

printPattern(4);
