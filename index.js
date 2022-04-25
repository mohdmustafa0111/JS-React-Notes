/**** What is JavaScript ? ****/

// JavaScript is a scripting language that enables you to to create dynamic content, animate images, control multimedia. It adds the behaviour to web pages.It is a case sensitive language.
// It was invented by Brenden Eich in 1995 and became an ECMA standard in 1997.

// const chalk = require("chalk");

/****  Section 1👉 we need to do it in console ****/
// alert("Welcome, to Complete JavaScript course");
// console.log('Welcome, to complete JavaScript Course');

// Ques: How JavaScript works ??
// Ans: In JavaScript everything happens inside an Execution Context.
//      Javascript is synchronous single-threaded language because it execute one command at a time and in
//      a specific order. that means it can only go to the next line once the current line has been
//      finished executing.

// That whole thing is called as execution context inside that there two things
//  1. Memory component
//  2. Code component
// In memory component variable and functions values are stored or allocated in a  key value format.
// Code component is a place where whole JavaScript code is executed.
// Memory component is also called as variable environment.
// And code component is also called as thread of execution.

// Inside Browser, there is a Javascript engine (we are considering V8 for chrome.)
// and an environment to run javascript properly. Javascript engine has two parts,
// Heap and Call Stack. And the engine has some assistant named Web APIs and Callback Queue.

// HEAPS

// It's an unstructured memory block. Our code's memory allocation happens here.
// As a programmer we don't have to worry much about heaps.

// CALL STACK

// CALL STACK is a stack where all these global execution context are kept.
// the main job of call stack is to execute whatever comes inside it. That's all it does.
// Whenever we try to execute the javascript code, a global execution context is created and
// pushed inside the CALL STACK.
// We can consider Call Stack as a kitchen where all our code executed or cooked. Whenever
// we try to run a piece of code, it goes to call stack first and then executed.
// It works in LIFO style. That is Last In First Out.

// GARBAGE COLLECTER
// It basically tries to free up memory space whenever possible.

// WEB API's 👇

// - setTimeout
// - DOM API's
// - fetch()
// - local storage
// - console
// - location

// ASYNCHRONOUS JAVASCRIPT 👇

// - setTimeout
// - setInterval
// - callback
// - Promise
// - async await

// JAVASCRIPT RUNTIME ENVIRONMENT

// JRE is like a big container which has all the things required to run JavaScript code.
// These things can be :-
// - JS Engine
// - Set of API's to connect to the outer environment
// - Event Loop
// - callback queue
// - Microtask queue
// etc

// Every browser has a Javascript Runtime Environment
// Node JS has also JRE. Node JS can run the JS code outside the browser by installing it in PC.

/**** Section 2👉 Code Editor for writing JS ****/

/**** Section 3👉 values and variables in JavaScript ****/

// Variable is a name given to a storage area that our program can manipulate.

// -> VariableKey VariableName = value

// var myName = 'vinod bahadur thapa';
// var myAge = 26;

// console.log(myName);

// Naming Practice
// var _myName = "vinod";
// var 1myName = "thapa";
// var _1my__Name = "bahadur";
// var $myName = "thapa technical";
// var myNaem% = "thapa technical";

// console.log($myName);

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

/**** Section 4👉 Data Types in JavaScript ****/

// String
// Number
// Boolean

// var myName = "vinod thapa";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmThapas = false;
// console.log(iAmThapas);

// // typeof operator
// console.log(typeof(iAmThapas));

// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); // 1st bug in JavaScript
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "vinod" - "thapa"
// true + true
// true + false
// false + true
// false - true

// console.log("vinod" - "thapa");

// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined?

// Ans: null is a special value meaning "no value" or "useless". null is a object becuse typeof null returns 'onject' (which is 2nd bug of javascript). On the other hand, undefined means that the variable has not been declared, or has not been given a value.

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// //2nd javascript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number

// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }

// NaN Practice 🤯

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(NaN === NaN);

// Ques: Undefined vs not defined ??
// Ans: It would "not defined" when we did not declare the variable and try to call that variable.
// It would "undefined" when we declared a variable in the code but did not assign the value before
// printing the variable value.

// SCOPES EXPLANATIONS (GLobal Scope, Local Scope, Function Scope, Block Scope)

// GLOBAL SCOPE

// var fruit = 'apple'
// console.log(fruit);        //apple

// function getFruit(){
//     console.log(fruit);    //fruit is accessible here
// }

// getFruit();                //apple

// LOCAL SCOPE

// //global scope
// function foo1(){
//   //local scope 1
//   function foo2(){
//       //local scope 2
//   }
// }

// //global scope
// function foo3(){
//   //local scope 3
// }

// //global scope

// FUNCTION SCOPE

// function foo(){
//   var fruit ='apple';
//   console.log('inside function: ',fruit);
// }

// foo();                    //inside function: apple
// console.log(fruit);       //error: fruit is not defined

// BLOCK SCOPE

// function foo(){
//   if(true){
//       var fruit1 = 'apple';        //exist in function scope
//       const fruit2 = 'banana';     //exist in block scope
//       let fruit3 = 'strawberry';   //exist in block scope

//   }
//   console.log(fruit1);
//   console.log(fruit2);
//   console.log(fruit3);
// }

// foo();
// //result:
// //apple
// //error: fruit2 is not defined
// //error: fruit3 is not defined

// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const

// var declarations are globally scoped or function scoped while let and const are block scoped.

// var variables can be updated and re-declared within its scope; let variables can be updated
// but not re-declared; const variables can neither be updated nor re-declared.

// They are all hoisted to the top of their scope. But while var variables are initialized
// with undefined, let and const variables are not initialized.

// FOR BEST EXPLANATION :- https://alligator.io/js/var-let-const/

// Ques: What is Temporal Dead Zone ?

// Ans: We all know, accessing a ‘let’ before initializing results in a ‘ReferenceError’
// whereas accessing a ‘var’ before its value is initialized we would get ‘undefined’.
// So what happens in case of ‘let’ and ‘const’ before value assignment?
// Variables defined using ‘let’ are in ‘Temporal Dead Zone’ from start of
// the block until variable’s initialization.

// we can see variable defined with ‘let’ throws ReferenceError,
// which means the variable doesn’t have any reference, so we can say the
// variable is temporarily dead(till the time it is assigned value).

/**** Section 5👉 Arithmetic operators in JavaScript ****/

// console.log(5+20);

// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operator is equal (=)

// var x = 5;
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);

// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values
// (either literals or variables) as their operands and
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("(Remainder) Modulus Operator " + 27%4);

// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

// Postfix increment operator means the expression is evaluated
// first using the original value of the variable and then the
// variable is incremented(increased).

// If used prefix, with operator before operand (for example, ++x),
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);

// Prefix increment operator means the variable is incremented first and then
// the expression is evaluated using the new value of the variable.

// 3️⃣Comparison operators
// A comparison operator compares its operands and
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);

// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values;
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of
// operands is true if and only if all of its operands are true.

// console.log(a > b || b > -50 || b < 0);

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation)
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of the two operand strings.

// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");

// 😳 4 Challenge Time
// What will be the output of 3**3?
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10

// sol 2:  ✔
// console.log(5 + "thapa");

// sol 3: ✔

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5;
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?

// sol
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );

// ************************************************************

/**** Section 6👉 Control Statement -
 *
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy, another statement can be executed.

// if raining = raincoat
// else no raincoat

// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }

// 🤩Challenge Time
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.

// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }

// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }

// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 12;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a
// case clause, and executes statements associated with that case.

// 1st without break statment
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle':
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }

// 🤗break
// Terminates the current loop, switch, or label
// statement and transfers
// program control to the statement following the terminated statement.

// 🤗continue
// Terminates execution of the statements in the current iteration of the
// current or labeled loop, and continues execution of the loop with the
// next iteration.

// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true.

// var num=20;
// // block scope
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// 5️⃣ Do-While Loop Statement

// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// 6️⃣ For Loop

// for (initializer; condition; iteration) {
//          code to be execited
//      };

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }

// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80

// for(var num = 1; num<= 10; num++){
//     var tableOf = 12;
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// for (var num=1; num<=10; num++) {
//   var tableof = 15;
//   console.log(tableof + " * " + num + " = " + tableof*num);
// }

// ************************************************************

/**** Section 5 👉 Functions in JavaScript ****/

// A JavaScript function is a block of code designed to perform a particular task.

//  1️⃣Function Definition

// Before we use a function, we need to define it.

// A function definition (also called a function declaration, or function statement)
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
// //

// 2️⃣Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();

// 3️⃣ Function Parameter vs Function Arguments
// The values which are written at the time of the definition of the function.
// An argument is a value passed to a function when the function is called.

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫

// Why Functions?

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments,
// to produce different results.

// OR

// A function is a group of reusable code which can be called anywhere
// in your program. This eliminates the need of writing the same code
// again and again.

// DRY => do not repeat yourself

// Function Statement OR (aka) Function Declaration

// A function statement loads before any code is executed. This behavior of
//  function statements is called hoisting, which allows a function to be used before it is defined.

// function x() {
//   set of statements
// }

// 4️⃣ Function expressions
// "Function expressions simply means
// create a function and put it into the variable"

// AND

// A function expression associates a value with a variable,
// just like any other assignment statement. function expressions
// load only when the interpreter reaches the definition of the function.

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);

// 5️⃣ Return Keyword
// When JavaScript reaches a return statement,
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );

// 6️⃣ Anonymous Function

// Anonymous Function is a function that does not have any name associated with it.
// Normally we use the function keyword before the function name to define a function
// in JavaScript, however, in anonymous functions in JavaScript, we use only the
// function keyword without the function name.

// OR

// An anonymous function is not accessible after its initial creation, it can only be
// accessed by a variable it is stored in as a function as a value. An anonymous function
// can also have multiple arguments, but only one expression.

// var funExp = function (a, b) {
//     return total = a + b;
// }

// var sum = funExp(15, 15);
// var sum1 = funExp(20, 15);

// console.log(sum);

// FIRST CLASS FUNCTION

// A programming language is said to have First-class functions when functions
//  in that language are treated like any other variable.
// OR
// Ability to be used like values.

// For example, in such
//  a language, a function can be passed as an argument to other functions,
//  can be returned by another function and can be assigned as a value to a variable.

// First Class Citizens and FCF both are the same thing.

// ************************************************************

// 👻 Now It's Time for Modern JavaScript 😍😍

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

// 1️⃣ LET VS CONST  vs  VAR

// var myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// function biodata() {
//   const myFirstName = "Vinod";
//   console.log(myFirstName);

//   if(true){
//     const myLastName = "thapa";
//   }

//   // console.log('innerOuter ' + myLastName);
// }

// console.log(myFirstName);

// biodata();

// var => Function scope
// let and const => Block Scope

// 2️⃣ Template literals (Template strings)

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80

// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
//   console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }

// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));

// 4️⃣ Destructuring in ES6

// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

//  ➡ Array Destructuring  🏁

// const myprolang = ['JS', 'C++', 'C', 'python', 'java'];

// ES-5
// var top1 = myprolang[0]
// var top2 = myprolang[1]
// var top3 = myprolang[2]
// console.log("my favorite language is " + top1);

// ES-6
// let [top1,,top3,,top2] = myprolang;
// console.log(`my most favorite language is ${top1} and least favorite lang is ${top2} and I enjoy this too ${top3}`);

// it takes the value of nested array too
// we can add and set the values as default

// let [top1,,,,,top6='Ruby'] = myprolang;
// console.log(`${top6}`);

// ➡ Object destructuring 🏁

// const myBioData = {
//   myFname: "vinod",
//   myLname: "thapa",
//   myAge: 26,
// };

// console.log(myBioData.myAge); // // This is how we can access them.

// let { myFname, myLname, myAge } = myBioData; // // After destructuring
// console.log(myAge);

// let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
// console.log(myDegree);

// 5️⃣ Object Properties

// ➡ we can now use Dynamic Properties

// let myName = "vinod";
// const myBio = {
//   [myName] : "hello how are you?",
//   [20 + 6] : "is my age"
// }

// console.log(myBio);

// ➡ no need to write key and value, if both are same

// let myName = "vinod thapa";
// let myAge = 26;

// const myBio = {myName,myAge}

// console.log(myBio);

// 6️⃣ Fat Arror Function

// 👻 Normal Way of writing Function

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//   return `the sum of the two number is ${sum}`;
// }
// console.log(sum());

// 👻 How to convert in into Fat Arrow Function

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum());

// REST OPERATOR

// The rest parameter syntax allows a function to accept
// an indefinite number of arguments as an array.

// function sum(...args) {
//   // console.log(para);

//   let sum = 0;
//   for (const i of args) {
//     sum = sum + i
//   }
//   console.log(sum);
// }
// sum(1,2,3,4,5);

// 7️⃣Spread Operator

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing
// array or object into another array or object.

// Spread operator allows an iterable to expand in places where 0+ arguments
// are expected. It is mostly used in the variable array where there is more than 1
// values are expected. It allows us the privilege to obtain a list of parameters from
// an array. Syntax of Spread operator is same as Rest parameter
// but it works completely opposite of it.

// it replaces the concat and copy method too.

// const names = ["ram", "sham", " kam"];
// console.log(names);

// 👇The spread operator is often used in combination with destructuring.

// const num1 = [1, 2, 3];
// const num2 = [...num1, 4, 5, 6];
// console.log(num2);

// function numbers(a,b,c) {
//   console.log(a+b+c);
// }
// var values = [1,3,4];
// numbers(...values);

// REST VS SPREAD OPERATOR

// While Rest operator takes variable, number, parameters or arguments
// and put them in a single array, the spread operator takes an array
// and splits it in an individual element.
// Rest is to combine.
// Spread is to split.

// ES7 features

// 1: array include
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3);

// ES8 Features

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));

// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);

// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);

// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// let x = 3.14;
// console.log(x);

// ************************************************************

/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time.
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and
// arrays are the prototype of this class.

// example 🏁

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// 1️⃣ Array Subsection 1 👉 Traversal in array✌
// navigate through an array

// if we want to get the single data at a time  and also
// if we want to change the data

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array

// console.log(myFriends.length);

// we use for loop to navigate

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }

// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });

// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal
// to an element, or -1 if none is found. It search the element from the
// 0th index number

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));

// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf('thapa'));

// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value,
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));

// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.

// console.log(  prices.findIndex((currVal) => currVal > 1400 )  );

// FILTER METHOD

// Array.prototype.filter() 🙋‍♂️

// The filter() method creates a new array filled with elements
// that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const prices = [200,300,350,400,450,500,600];

// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 400;
// })
// console.log(newPriceTag);

// we can turn it into single line 👇

// const newPriceTag = prices.filter((curElem) => curElem > 400);
// console.log(newPriceTag);

// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and
//returns the sorted array. The default sort order is ascending, built
//upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());

// However, if numbers are sorted as strings,
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect
// result when sorting numbers.

// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional.
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a
//     }
//     if(a<b){
//         // a comes first and then b
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a
//     }
//     if(a<b){
//         // a comes first and then b
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);

// 2: sort the array in descending order

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();

// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place.
// // The first array element becomes the last, and
// // the last array element becomes the first.

// 4️⃣ Array Subsection 4 👉 Perform CRUD

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);

// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);

// 2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);

// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// 😀8: challenge Time 🏁

// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

// sol1:
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

// sol2:
// console.log(newMonth);

// sol3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const updateMonth = months.splice(1,1,'Month');
// console.log(months);

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'june');
//   console.log(months);
// }else{
//   console.log('No such data found');
// }

// sol3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }

// 5️⃣ Array Subsection 4 👉 Map Method

// Array.prototype.map() 🙋‍♂️

// The map() method creates an array by calling a function
// on each element present in the parent array.

// Generally map() method is used to iterate over an array and
// calling function on every element of array.

// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// SYNTAX:-👇

// array.map(function(currentValue, index, arr), thisValue)

// function(currentValue, index, arr): It is required parameter and
// it runs on each element of array. It contains three parameters which are listed below:

// currentValue: It is required parameter and it holds the value of current element.
// index: It is optional parameter and it holds the index of current element.
// arr: It is optional parameter and it holds the array.
// thisValue: It is optional parameter and used to hold the value of passed to the function.
// Return Value: It returns a new array and elements of arrays are result of callback function.

// EXAMPLE 👇

// const array1 = [1, 4, 9, 16, 25];

// let newArr = array1.map((curElem, index, arr) => {
//     return curElem * 10;
// })
// console.log(newArr);

// we can turn it into single line too 👇

// let newArr = array1.map((curElem) => curElem * 10)
// console.log(newArr);

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

// 😀9: challenge Time 🏁

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those
//     elements which are greater than 10?

// sol1:
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);

// sol 2.a):
//  let arr = [2, 3, 4, 6, 8];

// let arr1 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10);
// console.log(arr1);

// sol 2.b):
//  let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//       return accumulator += curElem;
//     });
//  console.log(arr2);

// we can use the chaining too

// 👉 Reduce Method

// The reduce() method in JavaScript is used to reduce the array
// to a single value and it iterates over each and every element
// of the array (from left-to-right) and the return value of the function
// is stored in an accumulator.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// const arr = [5, 1, 3, 2, 6];

// find sum ??

// Traditional Way 👇

// function findSum(arr) {
//   let sum = 0;
//   for (let i=0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// Modern Way 👇

// const output = arr.reduce(function(acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// How to fatten an array
// converting 2d and 3d array into one dimensional array

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => {
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));

// console.log(flatArr);

// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);

/**** Section 7👉 Strings in JavaScript  ****/

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives,
// from string literals, or as objects, using the String() constructor

// let myName = "vinod thapa";
// let myChannelName = 'vinod thapa';

// // let ytName = new String("Thapa Technical");
// let ytName = 'thapa technical';

// console.log(myName);
// console.log((ytName));

// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string.

// let myName = "vinod thapa";
// console.log(myName.length);

// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);

// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("t", 6));

// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...

// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the
// // last occurrence of searchValue, or -1 if not found.

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));

// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified
// value and returns the position of the match

// const myBioData =  'I am the thapa Technical';
// let sData = myBioData.search("technical");
// console.log(sData);

// The search() method cannot take a second start position argument.

// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part
// in a new string.

// The method takes 2 parameters: the start position,
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

// // let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);

// The slice() method selects the elements starting at the
// given start argument, and ends at, but does not include,
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.

// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);

// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);

// // If we give negative value then the characters are
//  counted from the 0th pos

// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the
// length of the extracted part.

// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);

// 👉 Replacing String Content()

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value
// with another value in a string.

// let myBioData = `I am vinod bahadur thapa vinod`;

// let repalceData = myBioData.replace('Vinod','VINOD');
// console.log(repalceData);
// console.log(myBioData);

// Points to remember
// 1: The replace() method does not change the string
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only
// the first match
// 3:By default, the replace() method is case sensitive.
// Writing VINOD (with upper-case) will not work

//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));

// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every
// character, no matter the platform, device, application,
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.

// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );

// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);

//👉  Other useful methods

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "vinod"
// let lName = "thapa"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));

// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());

// Converting a String to an Array
// A string can be converted to an array with the
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe

/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a
// platform-independent format. Date objects contain a Number
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
// console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)

// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second,
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2021,0);
// console.log(d.toLocaleString());

// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:

// var d = new Date(0);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());

//👉 Dates Method

// const curDate = new Date();

// // how to get the indivisual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // how to set the indivisual date

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

//👉 Time Methods

// const curTime = new Date();

// // how to get the indivisual Time

// console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds
// // since January 1, 1970
// console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a
// // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// // how to set the indivisual Time

// let curTime = new Date();

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// // Practice Time
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

// Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();

/**** Section 9👉 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️
// console.log(Math.PI);

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

// let num = 10.501;
// console.log(Math.round(num));

// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));

// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9

// Math.round() 🙋‍♂️
// The Math.round() function returns the value of a number
// rounded to the nearest integer.

// console.log(Math.round(4.6));
// console.log(Math.round(99.1));

// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().

// Section 10👉 Document Object model in JavaScript

// 1️⃣ Window is the main container or we can say the
// global Object and any operations related to entire
// browser window can be a part of window object.

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

// 2️⃣ All the members like objects, methods or properties.
// If they are the part of window object then we do not refer
// the window object. Since window is the global object
// so you do not have to write down window.
// - it will be figured out by the runtime.

// For example
// 👉 window.screen or just screen is a small information
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object
// of the potentially visible (or better yet: rendered)
// document object model/DOM.

// 2️⃣ Where in the DOM we need to refer the document,
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()

// 3️⃣ Window has methods, properties and object.
// ex setTimeout() or setInterval() are the methods
// where as Document is the object of the Window and
// It also has a screen object with properties
// describing the physical display.

// Now, I know you have a doubt like we have seen the methods
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight,
// innerWidth and there are many more

// let's see some practical in DOM HTML file

// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document,
// the HTML elements themselves, e.g. document and all traversal you
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";

// 👉 The BOM is the Browser Object Model, which deals with browser components
// aside from the document, like history, location, navigator and screen
// (as well as some others that vary by browser). OR
// In simple meaning all the Window operations which comes under BOM are performed
// usign BOM

// Let's see more practical on History object

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }

// Section 3️⃣: Navigate through the DOM

// 1: document.documentElement
// returns the Element that is the root element of the document.
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
// list of the direct children only
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time
// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

//SECTION 4️⃣:  How to search the Elements and the References
// We will see the new file

// **********************************************************************

/**** Section 11👉 EVENTS in JavaScript ****/

// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code,
// to be added to HTML elements.

// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing)
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File

// section 2️⃣: What is Event Object?
// Event object is the parent object of the event object.
// for Example
// MouseEvent, focusEvent, KeyboardEvent etc

// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML
// document belongs to the MouseEvent Object.

// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard,
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// Section 5️⃣ InputEvents in JavaScript
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the
// checked state has been changed.

// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************

// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// 1️⃣ setTimeout()

// function x() {
//   i = 10;
//   setTimeout(function() {
//     console.log(i);
//   }, 3000);
// }
// x();

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()

// **********************************************************************

// 👉 object oriented Javascript

// **********************************************************************

// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container,
// we can refer this as an Objects.

// object = school bag

// How to create an Object?

// 1st way

// let bioData = {
//     myName : "thapatechnical",
//     myAge : 26,
//     getData : function(){
//       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = {
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();

// 👉 What if we want object as a value inside an Object

// let bioData = {
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical"
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );

// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context.

// The this object can have different values depending on where it is placed.

// // For Example 1
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object

// // ex 2
// function myName() {
//     console.log(this);
// }
// myName();

// // ex 3

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// // ex 4
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();

// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();

// // call method is used to call the method of another object
// // or with call(), an object can use a method belonging to another object

// // But as per other it is simply the way to use the this keyword or another object

// // **********************************************************************

// // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript

// // **********************************************************************

// // Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file

// // Higher Order Function
// function which takes another function as an arguments
// or that returns a new function is called HOF
// wo function jo dusre function ko as an argument accept krta hai use HOF kehte hain.

// Functions such as filter(),map(),reduce(),some() etc,
// these all are example of Higher-Order Functions.

// // Callback Function

// // function which get passed as an argument to another function is called CBF
// // A callback function is a function that is passed as an argument to
// // another function, to be “called back” at a later time.

// function greet(name, callMe) {
//   console.log("Hi " + name);
//   callMe();
// }

// // callback function
// function callMe() {
//   console.log("I am callback function");
// }

// // passing function as an argument
// greet("Peter", callMe);

// In the above program, there are two functions. While calling the greet() function,
// two arguments (a string value and a function) are passed.

// The callMe() function is a CALLBACK FUNCTION.

// ANOTHER EXAMPLE

// setTimeout(function () {
//   console.log("timer");
// }, 3000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// WE COULD HAVE WRITTEN IT THIS WAY TOO 👇

// function x(y) {
//   console.log("x");
//   y();
// }
// function y() {
//   console.log("y");
// }
// x(y);

// // // we need to create a calculator

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use

// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function,
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument

// // and add, sub and mult are called the callback function bcz they are passed
// // as an argument to another fucntion

// // InterView Question
// // Difference Between Higher Order Function and Callback Function ?

// // 🏁🏁Asynchronous JavaScript

// // 6️⃣:   Synchronous JavaScript Prog

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

// Asynchronous JavaScript Prog

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

// //👻 What is Event Loop in JavaScript ?

// An event loop is something that pulls stuff out of the queue and places it onto
// the function execution stack whenever the function stack becomes empty.

// // Event loop is just a guardian who keeps a good communication with Call Stack
// and Callback Queue. It checks if the call stack is free, then lets know the callback queue.
// Then Callback queue passes the callback function to Call stack to be executed. When all the
// callback functions are executed, the call stack is out and global execution context is free.

// // 5️⃣ Hoisting in JavaScript

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

//  In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope
//  before code execution. Basically, it gives us an advantage that no matter where functions and
//  variables are declared, they are moved to the top of their scope regardless of whether their scope is
//  global or local.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";

// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword
// // instead of var. (The other difference is that variables declared
// // with let are local to the surrounding block, not the entire function.)

// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript?

// When a variable is used in JavaScript, the JavaScript engine will
// try to find the variable’s value in the current scope. If it could not
// find the variable, it will look into the outer scope and will continue to
// do so until it finds the variable or reaches global scope.

// // The scope chain is used to resolve the value of variable names
// // in JS.

// // scope chain in js is lexically defined, which means that we can
// // see what the scope chain will be by looking at the code.

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to
// // their parent functions variables But the vice-versa is not true.
// OR
// A lexical scope in JavaScript means that a variable defined outside
// a function can be accessible inside another function defined after
// the variable declaration. But the opposite is not true; the variables
// defined inside a function will not be accessible outside that function.

// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
//   // // console.log(a+b);

//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c); //I can't use C
// }
// first();

// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function and its lexical scope bundled together
// forms a Closure OR (enclosed) with references
// // to its surrounding state (the lexical environment).

// // In other words, a closure gives you
// // access to an outer function’s scope from an inner function.

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = () => {
//     let a = 10;
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun();

// // it same like lexical scoping

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// "use strict"

// let x = "vinod";
// console.log(x);

// //🏁🏁🏁 Back To Advanced JavaScript

// Currying

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

// sum(5)(3)(8);

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************

// // 8️⃣: CallBack Hell

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`);
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`);
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩 JavaScript Object Notation

// // **********************************************************************

// // 👉 JSON.stringify turns a JavaScript object into JSON text and
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);
// // "{"key_1":"some text","key_2":true,"key_3":5}"

// console.log(object_as_string);

// typeof(object_as_string);
// "string"

// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
// // {key_1: "some text", key_2: true, key_3: 5}

// typeof(object_as_string_as_object);
// // "object"

// // 7️⃣ AJAX Call using XMLHttprequest

// // how to handled with the events and callback

// // XMLHttpRequest (XHR) objects are used to interact with servers.
// // You can retrieve data from a URL without having to do a full
// // page refresh. This enables a Web page to update just part
// // of a page without disrupting what the user is doing.
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to
// // add the event to load the data adn get it

// // to get the response
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });

// PROMISES 🤞

// Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations
// where callbacks can create callback hell leading to unmanageable code.

// callback functions were used but they had limited functionalities
// and created unmanageable code. Also it is not easy for any user to handle
// multiple callbacks at the same time.

// Promises are the ideal choice for handling asynchronous operations in the
// simplest manner. They can handle multiple asynchronous operations easily
// and provide better error handling than callbacks and events.

// Benefits of Promises 👇
// - Improves Code Readability
// - Better handling of asynchronous operations
// - Better flow of control definition in asynchronous logic
// - Better Error Handling

// A Promise has four states:
// - fulfilled: Action related to the promise succeeded
// - rejected: Action related to the promise failed
// - pending: Promise is still pending i.e. not fulfilled or rejected yet
// - settled: Promise has fulfilled or rejected

// Async/await

// Async means asynchronous. It allows a program to run a function without freezing
// the entire program. This is done using the Async/Await keyword.
// Async/Await makes it easier to write promises. The keyword ‘async’ before a function
// makes the function return a promise, always. And the keyword await is used inside
// async functions, which makes the program wait until the Promise resolves.

// "async and await make promises easier to write"
// async makes a function return a Promise.
// await makes a function wait for a Promise.
// So the async keyword is added to a function to tell them to return a promise
// rather than directing returning the value.

// Async 👇

// let test = async () => "Hello";

// test().then((res) => {
//   console.log(res);
// })

// Await 👇

// async function test() {
//   console.log(2);
//   await console.log(3);
//   console.log(4);
// }

// console.log(1);
// test();
// console.log(5);

// Another Example 👇

// const getData = async () => {
//   var y = await "Hello World";
//   console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);

// ERROR HANDLING

// The JavaScript statements try and catch come in pairs:

// try - The try statement allows you to define a block of code to be tested
// for errors while it is being executed.

// catch - The catch statement allows you to define a block of code to be executed,
// if an error occurs in the try block.

// The try statement lets you test a block of code for errors.
// The catch statement lets you handle the error.
// The throw statement lets you create custom errors.
// The finally statement lets you execute code, after try and catch, regardless of the result.

// Fetch API

// The fetch() method in JavaScript is used to request to the server
// and load the information in the webpages. The request can be of any APIs
// that returns the data of the format JSON or XML. This method returns a promise.

// fetch( url, options )

// Parameters: This method accept two parameters as mentioned above and described below:

// URL: It is the URL to which the request is to be made.
// Options: It is an array of properties. It is an optional parameter.

// fetch API example in another file.

// rest API :- rest stands for representational state transfer

// HTTP STATUS CODE 👇

// 1xx:  Informational - Request received / Processing
// 2xx:  Success       - Successfully received
// 3xx:  Redirect      - Further action must be taken/ redirect
// 4xx:  Client Error  - Request does not have what it needs
// 5xx:  Server Error  - Server failed to fulfill a valid request

// Example:- 404 - not found error - if we try to access something that doesn't exit.
