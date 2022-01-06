//Given an array of strings, return all groups of strings that are anagrams.
//cd Goldman_sacs    node q1.js

function Anagrams(n, string_list) {
  const out = [];
  const arr = string_list;
  const obj = {};
  for (let ele in arr) {
    if (!obj[arr[ele]]) {
      obj[arr[ele]] = true;
      const sortedEle = arr[ele].split``.sort().join``;
      let anagrams = "";
      for (let j = 0; j < n; j++) {
        const sortedJ = arr[j].split``.sort().join``;
        if (sortedEle === sortedJ) {
          obj[arr[j]] = true;
          anagrams += " " + arr[j];
        }
      }
      if (anagrams === "") {
        out.push(arr[ele]);
      } else {
        out.push(anagrams.trim());
      }
    }
  }
  out.forEach((e) => {
    console.log(e);
  });
}

const a = ["act", "god", "cat", "dog", "tac", "adc"];
const n = a.length;

Anagrams(n, a);
