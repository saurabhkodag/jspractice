let arr=[1,2,3,4,5];
let no=3;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==no)
        console.log("the two number's are = "+arr[i]+" and "+arr[j]);
    }
}