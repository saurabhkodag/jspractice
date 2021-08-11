let arr=[1,2,3,4,5];
let small=Number.MAX_VALUE;
let large=Number.MIN_VALUE;
for(var i=0;i<arr.length;i++){
    if(arr[i]>large)
    large=arr[i];
    if(arr[i]<small)
    small=arr[i];
}
console.log("largets number="+large);
console.log("smallest number="+small);