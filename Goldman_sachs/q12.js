function squaresInChessBoard(n){
    const ans=n*(n+1)*(2*n+1)/6;
    return ans;
    };

console.log(squaresInChessBoard(10)); 