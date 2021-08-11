//dice problem
let dict = {};
let count=0;
while(count<10){
    let no =Math.floor(Math.random()*10)%7;
    if(dict[no]==undefined)
    dict[no]=1;
    else
    dict[no]+=1;
    count=dict[no];
}
console.log(dict);
let min=10;
let max=0;
let amin=0;
let amax=0;
for (let key in dict) {
    if(max<dict[key]){
        max=dict[key];
        amax=key
    }
    if(min>dict[key]){
        min=dict[key];
        amin=key;
    }
}
console.log("minimum times number="+amin," ","maximum time number:"+amax);

//Write a Program to generate a birth month of 50 individuals
let dict1 = {};
let count1=0;
while(count1<50){
    let no =Math.floor(Math.random()*100)%13;
    if(no==0)
    no=12
    if(dict1[no]==undefined)
    dict1[no]=1;
    else
    dict1[no]+=1;
    count1++;
}
console.log(dict1);