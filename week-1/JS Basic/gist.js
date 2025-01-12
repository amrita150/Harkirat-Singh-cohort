//gist
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}
    
function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

//you are only allowed to call on efunction after this
//how will you display result of a sum



/*-----solution-----*/

//1st approach
// const ans = sum(1,2);
// displayResult(ans);

//2nd approach is
// function sum(num1, num2) {
//     let result = num1 + num2;
//     displayResult(result);
// }

//3rd approach 
//pass the func call as a parameter to fun sum
// function sum(num1, num2, fnToCall) {
//         let result = num1 + num2;
//         fnToCall(result);
//     }

//     function displayResult(data) {
//         console.log("Result of the sum is : " + data);
//     }
        
//     function displayResultPassive(data) {
//         console.log("Sum's result is : " + data);
//     }
//    const reslt = sum(1,2,displayResult);