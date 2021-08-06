
function func(x){
var i=0;
var j=x.length-1;
while(i<=j){
    if(x[i]!=x[j])
    return false;
    i++;
    j--;
}
return true;
}
console.log(func("nitin"))