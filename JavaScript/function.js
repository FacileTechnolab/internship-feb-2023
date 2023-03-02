//function declaration
// function walk() {
//   console.log("walk");
// }
// //anonymous function expression
// const run = function () {
//   console.log("run");
// };
// let move = run;
// run();
// move();
// walk();
//hoisting function

//that can be define before declaring function
//but the anonymous function can not run before declaring the function

// arguments
// function sum(a, b) {
//   //   return a + b;
//   //   console.log(arguments);
//   let total = 0;
//   for (let value of arguments) total += value;
//   return total;
// }
// console.log(sum(1, 3));
// console.log(sum(1, 3, 3, 4, 5, 5, 4));
// console.log(sum("shivangi", "shah"));
// there are return the total of the arguments.

//rest operators

// function sum(discount, ...price) {
//   //   console.log(args);
//   //   let total = 0;

//   const total = price.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }
// console.log(sum(0, 1, 20, 30));

//default parameter
// function interest(pricipal, rate, years) {
//   rate = rate || 3.5;
//   return ((pricipal * rate) / 100) * years;
// }
// console.log(interest(100000, 3.5, 5));

//get set property

// const person = {
//   firstName: "nirav",
//   tName: "patel",

//   get fullName() {
//     return `${person.firstName} ${person.tName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.tName = parts[1];
//   },
// };
// person.fullName = "john smith";

// console.log(person);

//try and catch
// const person = {
//   firstName: "nirav",
//   tName: "patel",

//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("value is not a string.");

//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.tName = parts[1];
//   },
// };
// try {
//   person.fullName = " ";
// } catch (e) {
//   alert(e);
// }

// console.log(person);

//local and global scope
// function start() {
//   const message = "hi";
//   if (true) {
//     const another = "bye";
//   }
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// const color = "red";

// function start() {
//   const message = "hi";
//   const color = "blue";

//   console.log(color);
// }
// function stop() {
//   const message = "bye";
// }
// start();

//let and var keyword
// function start() {
//   for (let i = 0; i < 5; i++) {
//     // console.log(i);
//     if (true) {
//       var color = "red";
//     }
//   }
//   console.log(i);
// }
// start();
//var=>function-scoped
//ES6(ES2015):let,const=>block-scoped
// let key word is only accessible in that define code of block
//and var keyword and there variable is accessible anywhere in file.

// this keyword
// const video={
//   title:'a',
//   play(){
//     console.log(this);

//   }
// };
// video.stop=function(){

// }
// video.play()

function sum(...items) {
  return items.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));
