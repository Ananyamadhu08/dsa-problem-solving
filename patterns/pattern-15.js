// Create a function to print the following pattern -
// A B C D E
// A B C D
// A B C
// A B
// A

function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 0; j < i; j++) {
      row += `${String.fromCharCode(65 + j)} `;
    }

    console.log(row);
  }
}

printPattern(5);
