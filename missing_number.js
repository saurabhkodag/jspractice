let arr=[1,2,3,4,5];
let mis= new Array(101).fill(0);
for(let i=0;i<arr.length;i++){
mis[arr[i]]++;
}
for(var i=0;i<101;i++){
    if(mis[i]==0)
    console.log(i);
}