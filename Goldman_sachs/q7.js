function lastPosi(b, a, k)
{
    if (a <= b - k + 1)
    return a + k - 1;
    a = a - (b - k + 1);
    return (a % b == 0) ? b : (a % b);
}

let n = 5;
let m = 8;
let k = 2;

console.log(lastPosi(n,m,k))