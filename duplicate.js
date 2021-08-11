let mp= new Map();
let arr=[1,2,5,5,5];
for(var i=0;i<arr.length;i++){
    if(mp.get(arr[i])!=undefined)
    mp.set(arr[i],mp.get(arr[i])+1);
    else
    mp.set(arr[i],1);
}
mp.forEach((value, key) => {
    if(value>1)
    console.log(key);
})
