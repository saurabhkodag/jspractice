function fac( n ){
    if(n==0)
    return 1;
    else 
    return n*fac(n-1);
}
var x=10;
console.log(fac(x));