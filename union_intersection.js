function union(arr1,arr2,m,n){
    var i = 0, j = 0;
        while (i < m && j < n) {
            if (arr1[i] < arr2[j])
                console.log(arr1[i++]+" ");
     
            else if (arr2[j] < arr1[i])
            console.log(arr2[j++]+" ");
     
            else {
            console.log( arr2[j++]+" ");
                i++;
            }
        }
     
        while (i < m)
        console.log(arr1[i++]+" ");	
     
        while (j < n)
        console.log(arr2[j++]+" ");
    }
    function Intersection(arr1,arr2,m,n){
        
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (arr1[i] < arr2[j])
            i++;
        else if (arr2[j] < arr1[i])
            j++;
        else /* if arr1[i] == arr2[j] */
        {
	    console.log(arr2[j]+" ");
            i++;
            j++;
        }
    }
    }
        var arr1=[1,2,10];
        var arr2=[2,3,5,7];
        var m=arr1.length;
        var n=arr2.length;
        console.log("union");
        union(arr1,arr2,m,n);
        console.log("intersection");
        Intersection(arr1,arr2,m,n);