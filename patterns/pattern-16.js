// Create a function to print the following pattern -
// A
// B B
// C C C
// D D D D
// E E E E E

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += `${String.fromCharCode(65 + i)} `;
    }

    console.log(row);
  }
}

printPattern(5);
