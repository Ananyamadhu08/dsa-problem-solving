// Create a function to print the following pattern -
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function printPattern(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    let start = 1;

    i % 2 == 0 ? (start = 1) : (start = 0);

    for (let j = 0; j <= i; j++) {
      row += `${start} `;
      start = 1 - start;
    }

    console.log(row);
  }
}

printPattern(5);
