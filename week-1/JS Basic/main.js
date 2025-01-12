console.log("hello world");

//declare variable
var a = 5;
const b = 78;
// b = 90; this will throw an error
console.log(b);  

/* --------------------------------------Arrays--------------------------------------------- */

//now if we want to add name of alot of persons then instead of write each person name individually we use array
//i.e var name1 = "amrita"; var name2 = "raj" instead of this use an array
//syntax for array 
const persons = ["Shahil", "Amrita", "Amisha"];

//to print particual person name 
console.log(persons[0]);

//using for loop we can print every element of an array
console.log("Elements of an array are: ");
for(let i =0; i<persons.length; i++){
    console.log(persons[i]);
}

/* --------------------------------------Objects--------------------------------------------- */

//to store each person age and last name and location we have to make array for each category 
//but instead of that we can use an object 

//syntax for object
const user1 = {
    firstName : "Amrita",
    lastName : "Kaur", 
    age : 23
}

const user2 = {
    firstName : "Neha",
    lastName : "Kaur", 
    age : 23
}

console.log(user1["age"]);


//we can also create array of object
const data = [{
    firstName : "Amrita",
    lastName : "Kaur", 
    age : 23,
    gender : "female"
}, {
    firstName : "Aman",
    lastName : "Singh", 
    age : 23,
    gender: "Male"
}];

//gender of person at 0th index
console.log(data[0]["gender"]);

/* -------------------------------------Functions--------------------------------------------- */

//function declaration
function sum(a,b){
    return a+b;
}

//function call
var res = sum(4,6);
console.log("Sum of two no. is: " + res);

//set timeout
function greet(){
    console.log("hello world");
}
//after how many sec the fun will get called
//setTimeout(function call, millisec)
setTimeout(greet, 2000);