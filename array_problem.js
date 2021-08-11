let arr=[];
for(let i=0;i<10;i++){
    let no =Math.floor(Math.random()*1000);
    arr.push(no);
}
console.log(arr);
let small=1000;
let smallest=1000;
let large=0;
let largest=0;
for(let i1=0;i1<10;i1++){
    
    if(smallest>=arr[i1]){
        small=smallest;
        smallest=arr[i1];
        console.log(arr[i1]);
    }
    if(largest<=arr[i1]){
        large=largest;
        largest=arr[i1];
    }
}
console.log("2nd smallest",small);
console.log("2nd largest",large);
arr.sort();
console.log("2nd smallest",arr[1]);
console.log("2nd largest",arr[8]);


console.log("Prime Factors of a number n")
let t=[];
    let n=315;
    while (n % 2 == 0) 
    { 
        t.push(2); 
        n = Math.floor(n/2); 
    }  
    for (let i = 3; i <= Math.sqrt(n); i = i + 2) 
    {  
        while (n % i == 0) 
        { 
            t.push(i); 
            n = Math.floor(n/i); 
        } 
    } 
  
    if (n > 2) 
        t.push(n); 

console.log(t);
console.log("Sum of three Integer adds to ZERO");
let arr1=[3,-1,-7,-4,-5,9,10];
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        for(let k=j+1;k<arr1.length;k++){
            if(arr1[i]+arr1[j]+arr1[k]==0)
            console.log(arr1[i],arr1[j],arr1[k]);
    }
}
}
console.log("The digits that are repeated twice");
let l=1;
let a=[];
while(l<=100){
    let no =Math.floor(Math.random()*100);
    a.push(no);
    l++;
}
let freq= Array(101).fill(0);
for(let i=0;i<=100;i++){
    
    freq[a[i]]=freq[a[i]]+1;
}
let temp=11;
let r=[];
for(let i=0;i<10;i++){
    if(freq[temp]>=1){
        r.push(temp);
    }
    temp+=11;
}
console.log(r);