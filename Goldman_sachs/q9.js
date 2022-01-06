function printMinNumberForPattern(s){
    const a = s.split``;
    const len = a.length;
    const str = []; 
    function  MinNum(a,n){
        if(n === a.length){
            return;
        }
        if(str.length === 0){
            (a[0]==='I')?str.push(1) : str.push(2);
        }
        if(a[n]==='D'){
            str.push(str[n] - 1);
            MinNum(a, n + 1);
        }
        if(a[n]==='I'){
            if(a[n+1] === undefined || a[n+1]==="I"){
                    str.push(Math.max(...str) + 1);
                    MinNum(a, n+1);
            }
                else{
                    let count = 0;
                        for(let i = n+1; i<a.length;i++){
                            count++;
                            if(a[i+1] !== 'D') break;
                        }
                        str.push(Math.max(...str) + 1 + count);
                        MinNum(a, n+1);
                    }
        }
    }
     const num = 0;
    MinNum(a,num);
    return str.join``;
}

   



console.log(printMinNumberForPattern("IDIDID"));