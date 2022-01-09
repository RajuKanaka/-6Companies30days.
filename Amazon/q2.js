// Longest mountain

function LongestMountain(arr) {
  let output = [];
  for (let start = 0; start < arr.length; start++) {
    for (let end = start + 1; end <= arr.length; end++) {
      const sub = arr.slice(start, end);
      if (
        sub.length >= 3 &&
        Math.max(...sub) !== sub[0] &&
        Math.max(...sub) !== sub[sub.length - 1]
      ) {
        const peak = Math.max(...sub);
        const left = sub.slice(0, sub.indexOf(peak));
        const right = sub.slice(sub.indexOf(peak) + 1);
        if (left.includes(peak) || right.includes(peak)) break;
        if (
          left.join`` == left.sort((a, b) => a - b).join`` &&
          right.join`` == right.sort((a, b) => b - a).join``
        )
          if (output.length < sub.length) output = [...sub];
      }
    }
  }
  console.log(output.length);
}
LongestMountain([2, 1, 4, 7, 3, 2, 5]);
