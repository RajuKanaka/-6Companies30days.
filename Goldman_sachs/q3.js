// Count the subarrays having product less than k

const a = [1, 2, 3, 4];
const n = 4;
const k = 10;

function countSubArrayProductLessThanK(arr, n, k) {
  let count = 0;
  for (let start = 0; start < arr.length; start++) {
    for (let end = start + 1; end <= arr.length; end++) {
      const subArr = arr.slice(start, end);
      if (eval(subArr.join`*`) < k) {
        count++;
      }
    }
  }
  return count;
}

console.log(countSubArrayProductLessThanK(a, n, k));
