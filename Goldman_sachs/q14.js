var minSubArrayLen = function (target, nums) {
  const output = [];
  for (let start = 0; start < nums.length; start++) {
    for (let end = start + 1; end <= nums.length; end++) {
      const subarr = nums.slice(start, end);
      if (eval(subarr.join`+`) === target) {
        output.push(subarr.join``);
      }
    }
  }
  if (output.length === 1) {
    return output[0].length;
  }

  if (output.length === 0) {
    return 0;
  }
  let out = output[0];
  for (let i = 0; i < output.length; i++) {
    if (out.length > output[i].length) {
      out = output[i];
    }
  }
  return out.length;
};

console.log(minSubArrayLen(12, [1, 2, 3, 4, 5]));
