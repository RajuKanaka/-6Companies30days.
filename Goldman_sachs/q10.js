//  Find max 10 numbers in a list having 10M entries.

function max10(arr){
    if(arr.length === 0){
        console.log("-1");
    }
    const a = new Set(arr);
    const array = Array.from(a);
    const sortedArr  = array.sort((a,b)=>a-b);
    const n = sortedArr.length;
    if(n < 10){
        for(let i = n-1;i>=0;i--){
           console.log(sortedArr[i]); 
    }
    }
    else{
    for(let i = n - 1;i>=n-11;i--){
        console.log(sortedArr[i]);
    }
    }
}

max10([2,3,21,56,7,8,43,43,657,243,543,675,6543,423]);