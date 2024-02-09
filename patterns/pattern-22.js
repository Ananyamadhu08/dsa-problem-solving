// Create a function to print the following pattern -
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

function printPattern(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let row = "";

    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let down = 2 * n - 2 - i;
      let left = j;
      let right = 2 * n - 2 - j;

      row += `${n - Math.min(top, down, left, right)} `;
    }

    console.log(row);
  }
}

printPattern(4);
