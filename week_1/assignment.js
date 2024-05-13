//wap to print the biggest number in an array

const arr=[20,33,11,222,4343,21];

let max=1;

for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            max=arr[i];
        }
        else{
            max=arr[j];
        }
    }
}
console.log(max);

//wap that reverse all the elements of an array
let aray=[21,231,325,12,43];
let len=aray.length
let temp=0;
for(let i=0, j=len-1;i<=j;i++, j--){
    temp=aray[i];
    aray[i]=aray[j];
    aray[j]=temp;
    
}
console.log(aray);