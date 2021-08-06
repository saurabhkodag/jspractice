
function func(x){
    for(var i=2;i<=x/2;i++)
    {
        if(x%i==0){
        return false;
        }
    }
    return true;
}

console.log(func(29));