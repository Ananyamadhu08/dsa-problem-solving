// Given an array of integers, find the unique quadruplets that add up to give a target value.

function fourSum(arr, target) {
  const n = arr.length;

  let quadrupletsArr = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          const sum = arr[i] + arr[j] + arr[k] + arr[l];

          if (sum === target) {
            let tempArr = [arr[i], arr[j], arr[k], arr[l]];

            tempArr.sort((a, b) => a - b);

            quadrupletsArr.push(tempArr);
          }
        }
      }
    }
  }

  let quadrupletsSet = new Set(quadrupletsArr.map(JSON.stringify));

  quadrupletsArr = Array.from(quadrupletsSet).map(JSON.parse);

  return quadrupletsArr;
}

const numArr = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];

const target = 9;

const result = fourSum(numArr, target);

console.log(result);

// Time complexity: O(N^4 * log(no. of unique quadruplets))
// Space complexity: O(2 * no. of the unique quadruplets)
