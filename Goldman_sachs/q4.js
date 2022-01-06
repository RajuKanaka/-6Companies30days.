// Run Length Encoding

function encode(str) {
  const out = [];
  let temp = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (temp === str[i]) {
      if (out.length >= 2) {
        out.pop();
        out.pop();
      }
      count++;
      out.push(temp);
      out.push(count);
    } else {
      temp = str[i];
      count = 1;
      out.push(temp);
      out.push(count);
    }
  }
  return out.join``;
}

const cipher = "abbbcdddd";

console.log(encode(cipher));
