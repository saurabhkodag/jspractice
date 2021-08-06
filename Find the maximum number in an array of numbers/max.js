function func(arr){
    var m=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=m)
        m=arr[i];
    }
    return m;
    }
    const arr=[1,2,3,-5,-4];
    console.log(func(arr));