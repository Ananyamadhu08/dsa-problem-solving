// Create a function to print the following pattern -
// A
// A B
// A B C
// A B C D
// A B C D E

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += `${String.fromCharCode(65 + j)} `;
    }

    console.log(row);
  }
}

printPattern(5);
