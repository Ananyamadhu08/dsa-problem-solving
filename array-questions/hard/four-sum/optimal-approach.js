// Given an array of integers, find the unique quadruplets that add up to give a target value.

function fourSum(arr, target) {
  const n = arr.length;

  arr.sort((a, b) => a - b);

  let quadrupletsArr = [];

  for (let i = 0; i < n; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j !== i + 1 && arr[j] === arr[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        const sum = arr[i] + arr[j] + arr[k] + arr[l];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          let tempArr = [arr[i], arr[j], arr[k], arr[l]];

          quadrupletsArr.push(tempArr);

          k++;
          l--;

          while (k < l && arr[k] === arr[k - 1]) k++;
          while (k < l && arr[l] === arr[l + 1]) l--;
        }
      }
    }
  }

  return quadrupletsArr;
}

const numArr = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];

const target = 9;

const result = fourSum(numArr, target);

console.log(result);

// Time complexity: O(N^3)
// Space complexity: O(no. of the unique quadruplets)
