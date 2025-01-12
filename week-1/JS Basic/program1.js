/* -------------------------------------Question 1--------------------------------------------- */

//write the program to greet a person given their first and last name
var firstName = "Amrita";
var lastName = "Kataria";

console.log("Good Evening! " + firstName + " " + lastName);


/* -------------------------------------Question 2--------------------------------------------- */

//write a program that greets a person based on their gender. (if else)
var gender = "female";
if(gender=="female"){
    console.log("Hi! Miss " + firstName + " " + lastName);
} else{
    console.log("Hi Mr." + firstName + " " + lastName);
}


/* -------------------------------------Question 3--------------------------------------------- */

//write a program that counts from 0 - 1000 and prints
var count = 0;
for(let i = 0; i<=10; i++){
    console.log(i);
    count++;
}

console.log("Total numbers that prints are: " + count);
