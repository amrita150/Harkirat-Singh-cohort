/* -------------------------------------Question 1--------------------------------------------- */

//write a program to prints all the even numbers in an array
const numbers = [24,21,7,9,1,42,2,104];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
    console.log(numbers[i]);
    }
} 


/* -------------------------------------Question 2--------------------------------------------- */

//write a program to print the biggest no. in an array
var max = numbers[0];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max = numbers[i];
    }
}

console.log("Largest no. in the given array is:"+  max);


/* -------------------------------------Question 3--------------------------------------------- */

//write a program that prints all the male person's first name given a complex object
const data = [{
    firstName : "Amrita",
    lastName : "Kaur", 
    age : 23,
    gender : "female"
}, {
    firstName : "Aman",
    lastName : "Singh", 
    age : 20,
    gender: "male"
}, {
    firstName : "Shahil",
    lastName : "Khan", 
    age : 22,
    gender: "male"
} ];

for(let i=0; i<data.length; i++){
    if(data[i]["gender"]=="male"){
        console.log(data[i]["firstName"]);
    }
}


/* -------------------------------------Question 4--------------------------------------------- */

//write a program that reverse all the element of an array
var arr = [7,10,3,1,4,2];
var a = 0;
var b = arr.length - 1;

while(a<b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    a++;
    b--;
}

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
} 