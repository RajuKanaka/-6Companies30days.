// Ugly Numbers

function getNthUglyNo(N) {
  const a = [1];
  let i = 1;
  function findNthNum(i) {
    i += 1;
    if (a.length === N) {
      return;
    }

    function maxDivide(a, b) {
      while (a % b == 0) a = a / b;
      return a;
    }

    function isUgly(no) {
      no = maxDivide(no, 2);
      no = maxDivide(no, 3);
      no = maxDivide(no, 5);

      return no == 1 ? true : false;
    }
    if (isUgly(i)) {
      a.push(i);
    }

    findNthNum(i);
  }
  findNthNum(i);
  return a[N - 1];
}

console.log(getNthUglyNo(42));
