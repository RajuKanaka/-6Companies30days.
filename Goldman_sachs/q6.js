var gcdOfStrings = function(str1, str2) {
   const stringArray = [];
    const smallstr = (str1.length>str2.length)? str2 : str1;
    let tempstr = '';
    for(let i = 0;i<smallstr.length; i++){
        tempstr +=smallstr[i];
        if(tempstr.repeat(str1.length / tempstr.length)===str1 && tempstr.repeat(str2.length/ tempstr.length)===str2){
            stringArray.push(tempstr);
        }
    }
    
    if(stringArray.length === 0 ){
        return "";
    }
    
    if(stringArray.length === 1){
    return stringArray[0];
    }
    
    let output = stringArray[0];
    stringArray.forEach((e)=>{(output.length < e.length)?output = e:output});
    return output;
};

console.log(gcdOfStrings("abcabc","abcabcabc"));



