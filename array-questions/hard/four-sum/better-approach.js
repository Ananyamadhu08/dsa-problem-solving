// Given an array of integers, find the unique quadruplets that add up to give a target value.

function fourSum(arr, target) {
  let n = arr.length;

  let quadrupletsSet = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let tempSet = new Set();

      for (let k = j + 1; k < n; k++) {
        const sum = arr[i] + arr[j] + arr[k];

        const fourthNum = target - sum;

        if (tempSet.has(fourthNum)) {
          let tempArr = [arr[i], arr[j], arr[k], fourthNum];

          tempArr.sort((a, b) => a - b);

          quadrupletsSet.add(JSON.stringify(tempArr));
        }

        tempSet.add(arr[k]);
      }
    }
  }

  let quadrupletsArr = Array.from(quadrupletsSet).map(JSON.parse);

  return quadrupletsArr;
}

const numArr = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];

const target = 9;

const result = fourSum(numArr, target);

console.log(result);

// Time complexity: O(N^3 * log(no. of unique quadruplets))
// Space complexity: O(2 * no. of the unique quadruplets) + O(N)
