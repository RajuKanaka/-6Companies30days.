function findTwoElement(arr,n) {
       for(let i = 1;i<n;i++){
           if(arr[i-1]===arr[i]){
               return arr[i-1] + " " + i;
           }
       }
    }

   console.log(findTwoElement([1, 3, 3],3)); 