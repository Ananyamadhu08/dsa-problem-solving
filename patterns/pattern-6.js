// Create a function to print the following pattern -
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += `${j} `;
    }
    console.log(row);
  }
}

printPattern(5);
