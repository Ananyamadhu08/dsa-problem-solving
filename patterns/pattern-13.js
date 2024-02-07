// Create a function to print the following pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function printPattern(n) {
  let num = 1;

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += `${num} `;
      num += 1;
    }

    console.log(row);
  }
}

printPattern(5);
