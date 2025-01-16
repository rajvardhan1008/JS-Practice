// *** Hoisting is a process of where variable declaration move to the top of the scope in the 
// phase of execution time

//***var hoisting : initialized with undefined values;
// console.log(a);
// var a = 5;


// ***Let hoisting : hoisted but not initialized with any value 
// console.log(num); // Error
// let num = 6;

//const hoising : same as let
// console.log(num);
// const num = 10;


// *** Function hoisting : we can access function before declaration
// add();
// function add(){
//     console.log(4+8);
// } 


// ***Function Expression : when funtion assigned to a variable, they are hoised like variable
// console.log(funVar);
// var funVar = function(){
//     console.log("hii");
// }


// *** Class Hoisting : hoisted but not initialized
// var obj = new tempClass(); //errror
// class tempClass{
//     constructor(){
//         console.log("temp class");
//     }
// }