// Given an array of integers, find unique triplets that add up to give a sum of zero.

function threeSum(arr) {
  const n = arr.length;

  let tripletsSet = new Set();

  for (let i = 0; i < n; i++) {
    let tempSet = new Set();

    for (let j = i + 1; j < n; j++) {
      let thirdNum = -(arr[i] + arr[j]);

      if (tempSet.has(thirdNum)) {
        let tempArr = [arr[i], arr[j], thirdNum];

        tempArr.sort((a, b) => a - b);

        tripletsSet.add(JSON.stringify(tempArr));
      }

      tempSet.add(arr[j]);
    }
  }

  let tripletsArr = Array.from(tripletsSet).map(JSON.parse);

  return tripletsArr;
}

const numArr = [-1, 0, 1, 2, -1, -4];

const result = threeSum(numArr);

console.log(result);

// Time complexity: O(N^2 * log(no. of unique triplets))
// Space complexity: O(2 * no. of the unique triplets) + O(N)
