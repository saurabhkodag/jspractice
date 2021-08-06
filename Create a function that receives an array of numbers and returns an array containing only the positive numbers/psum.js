function func(arr){
var sum=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]>=0)
    sum+=arr[i];
}
return sum;
}
const arr=[1,2,3,-5,-4];
console.log(func(arr));