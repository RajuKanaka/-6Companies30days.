// IPL 2021 - Match Day 2

function max_of_subarrays(arr, n, k) {
  const output = [];
  for (let start = 0; start < n; start++) {
    for (let end = start + 1; end <= n; end++) {
      const sub = arr.slice(start, end);
      if (sub.length === k) {
        output.push(Math.max(...sub));
      }
    }
  }
  return output;
}

const arr = [1, 2, 3, 1, 5, 5, 2, 3, 6];
const n = arr.length;
const k = 3;

console.log(max_of_subarrays(arr, n, k).join` `);
