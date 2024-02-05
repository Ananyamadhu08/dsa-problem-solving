// Create a function to print the following pattern -
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${i} `;
    }
    console.log(row);
  }
}

printPattern(5);
