// ***Functions - reusable code of block to perform specif task, making code more readable, maintainable and modular


// ***Parameter - name of the values which is expected by the function when it is called
// function multiply(a, b){ // a and b are paramenters
//     return a*b;
// }
// const ans = multiply(2,8);
// console.log(ans);


// ***Arguments - values which are passed to the funtion when it is called
// function add(a, b){
//     console.log(a+b);
// }
// add(5, 2); // 5 and 2 are arguments


// ***Rest parameters - allows funtion to accept indefinite number of arguments
// function sumOfArray(...numbers){ // ...numbers are rest parameters
//     return numbers.reduce((acc, num) => acc+num, 0);
// }
// console.log(sumOfArray(1,2,3,4,5,6,7,8,9,10));


// ***Classic Function - standard way of declaring functions
// function sayNamaste(){
//     console.log("Namaste, Duniya");
// }
// sayNamaste();


// ***Nested Function - function inside function , the inner function can accept any value of outer funtion
// function outerFun(outerVal){
//     console.log(`In outer funtion : outer value : ${outerVal}`);

//     function innerFun(innerVal){
//         console.log(`In inner function : inner Value : ${innerVal}`);
//         console.log(`In inner funntion : outer Value : ${outerVal} `);
//     }

//     innerFun(5);
// }

// outerFun(10);



// ***Scope chain - Js determines the heirarchy of variabl accessibility.
// *** firstly local scope, then outer scope and then global scope

// let globalVar = "Global";

// function outerFunction() {
//     let outerVar = "Outer";

//     function innerFunction() {
//         let innerVar = "Inner";

//         console.log(innerVar); // Accessible: Inner Variable
//         console.log(outerVar); // Accessible: Outer Variable
//         console.log(globalVar); // Accessible: Global Variable
//     }

//     innerFunction();
//     // console.log(innerVar); // Error: innerVar is not defined (local to innerFunction)
// }

// outerFunction();
// // console.log(outerVar); // Error: outerVar is not defined (local to outerFunction)



// ***Immediately invoked funtions (IIFE) - these are the funtions which is invoked as soon as they defined

// (function(){
//     console.log("Namaste !");
// }());



// **********************************TYPES OF FUNCTION*******************************
// *** Arrow, anonymous, Higher-order, callback, first class, pure funtion, impure fuction


// ***Arrow funtion - concise way of writing funtion
// const add = (a, b)=> a+b; //without block body
// console.log(add(2, 5));

// const multiply = (a, b)=>{ //with block body
//     return a*b;
// }
// console.log(multiply(2, 10));


// ***Anonymous Funtion - a function without name
// const greet = function(){
//     console.log("Namaster, Duniya");
// }
// greet();


// ***Higher Order Function - a function that accept another funtion as an argument or return a function
// function HigherOrderFunction(){
//     console.log("HOF Invoked!");
// }
// HigherOrderFunction((message) => console.log(message));



// ***Callback funtion - it is passed as an argumment to another funtion to be executed
// function myCallback(sum){
//     console.log(`Sum is ${sum}`);
// }

// function sum(num1, num2, callbackFun){  //callbackFun is a callback function.
//     const sum = num1+num2;
//     callbackFun(sum);
// }

// sum(2, 3, myCallback);


// ***First-Class Function - means funtions can be sotored in a variable, passes as an arguemnt and can be returned by a function.
// function sayNamaste(){
//     console.log("Namaste...");
// }

// const greeting = sayNamaste;
// greeting();