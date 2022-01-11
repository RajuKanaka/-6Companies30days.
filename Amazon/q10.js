function  matchPairs(nuts, bolts ,n){
    //code here
    nuts.sort((a,b)=>a.charCodeAt()-b.charCodeAt())
    bolts.sort((a,b)=>a.charCodeAt()-b.charCodeAt())
    return [nuts,bolts];
}

matchPairs(["@", "%", "$", "#", "^"],["%", "@", "#", "$", "^"],5)