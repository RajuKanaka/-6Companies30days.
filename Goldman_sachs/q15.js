function canPair(nums,k){
       for(let i = 0; i<nums.length;i+=2){
           if((nums[i] + nums[i+1]) % k === 0){
               return "True";
           }
       }
       return "False";
    }
console.log(canPair([7, 5, 7, 3],6))