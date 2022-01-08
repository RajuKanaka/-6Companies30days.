const arr = [2,1,4,7,3,2,5]
// expexted [1,4,7,3,2]

const uniq = [...new Set(arr)]
console.log(uniq);