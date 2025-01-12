var namee = "Amrita kataria";
console.log(namee.length); 
console.log(namee.indexOf("rita"));
console.log(namee.substring(3,5));
console.log(namee.replace("kataria", "Beautiful"));

// split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("i a am a amrita a student a of sggscc", "a");


  // toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
