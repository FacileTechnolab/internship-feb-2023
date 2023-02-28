console.log("hello");

// var TimeM = 6;
// var TimeA = 12;
// var TimeE = 19;
// var TimeN = 24;

// if (TimeM >= 6 && TimeM < 12) {
//   console.log("Good Morning");
// } else if (TimeM >= 12 && TimeM < 19) {
//   console.log("Good Afternoon");
// } else if (TimeE >= 19 && TimeE < 24) {
//   console.log("Good Evening");
// } else if (TimeN >= 24) {
//   console.log("Good Night");
// } else {
//   console.log("not valid time");
// }
// let x = 1;

// let y = x !== 2;
// console.log(y);

// let Day;
// switch (new Date().getDay()) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wedenesday");
//     break;

//   case 4:
//     console.log("Thuesday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//     console.log("Saturday");
//     break;

//   case 7:
//     console.log("Sunday");
//     break;
// }

// for (var i = 5; i > 0; i--) {
//   if (i % 2 !== 0) console.log("hello world " + i);
// }
// var f = 0;
// while (f <= 7) {
//   console.log("Today " + f);
//   f++;
// }

// const person = {
//   name: "shivangi",
//   age: 22,
// };
// for (let x in person) console.log(x, person[x]);

// const color = ["red", "blue", "pink"];
// for (let y in color) console.log(y);

// var i = 0;
// // while (i < 10) {
// //   // if(i===5)break;
// //   // if (i == 5) {
// //   //     continue;

// //   i++;
// // }
// function max(a, b) {
//   return a > b ? a : b;
// }
// var Function = max(4, 6);
// console.log(Function);
// const output = fizzBuzz(3);
// console.log(output);

// function fizzBuzz(input) {}

// console.log(checkSpeed(50));

// function checkSpeed(speed) {}

// showNumbers(10);
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "even");
//     else console.log(i, "odd");
//   }
// }
// const isActiva = true;
// if (isActiva) console.log("hello");
// function countTruthy(array) {}
// console.log(sum(10));
// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
//   return sum;
// }

// const marks = [80, 80, 50];
// console.log(calculaterGrade(marks));
// function calculaterGrade(marks) {
//   let sum = 0;
//   for (let mark of marks) sum += mark;
//   let average = sum / marks.length;
//   if (average >= 0 && average <= 59) return "f";
// }

// console.log(showStars(5));
// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }
// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }
// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;
//   return true;
// }
// function createCircle(radius, location) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

let obj = { value: 10 };
function incerease(obj) {
  obj.value++;
}
incerease(obj);
console.log(obj);

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
for (let key in circle) console.log(key, circle[key]);
