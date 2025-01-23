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