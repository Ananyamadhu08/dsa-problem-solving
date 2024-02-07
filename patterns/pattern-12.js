// Create a function to print the following pattern -
// 1      1
// 12    21
// 123  321
// 12344321

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let space = 2 * (n - i);

    for (let j = 1; j <= i; j++) {
      row += j;
    }

    for (let k = 1; k <= space; k++) {
      row += " ";
    }

    for (let m = i; m >= 1; m--) {
      row += m;
    }

    console.log(row);
  }
}

printPattern(4);
