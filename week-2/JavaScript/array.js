// const numbers = [3, 4];
// numbers.push(5, 6);
// console.log(numbers);
// numbers.unshift(1, 2);
// console.log(numbers);
// numbers.splice(3);
// console.log(numbers);

// //finding elements(primitive)
// const number = [1, 2, 3, 1, 4];
// console.log(number.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1) !== -1);
// console.log(number.includes(1));

// //finding elements in reference type
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "r" },
// ];
// // const course = courses.find(function (course) {
// //   return course.name === "a";
// // });
// const course = courses.find((course) => course.name === "zd");
// console.log(course);

//removing elements

// const numbers = [1, 2, 3, 4];

//end
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

//begining
// const first = numbers.shift(1);
// console.log(first);
// console.log(numbers);

//middle
// numbers.splice(0, 1);
// console.log(numbers);

//emptying array
// let numbers = [1, 2, 3, 4];
// let another = numbers;
// // numbers = [];
// // numbers.length = 0;
// // numbers.splice(0, numbers.length);
// while (numbers.length > 0) numbers.pop();
// console.log(numbers);
// console.log(another);

//combining and slicing array

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combine = first.concat(second);
// const slice = combine.slice(3, 4);

// console.log(combine);
// console.log(slice);

//spread operators
// const combine = [...first, "a", ...second, "b"];
// const slice = combine.slice(0, 8);
// const copy = [...combine];
// console.log(copy);
// console.log(slice);
// console.log(combine);

//iterating an array

// const numbers = [1, 2, 3];
// for (let number of numbers) console.log(number);

// numbers.forEach(function (number) {
//   console.log(number);
// });
// numbers.forEach((number, index) => console.log(index, number));

//join method array
// const numbers = [1, 2, 3, 4];
// console.log(numbers);
// const joined = numbers.join(",");
// console.log(joined);
// const message = "this is my first and second message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

//sorting array
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//   { id: 1, name: "node.js" },
//   { id: 2, name: "javascript" },
// ];

// courses.sort(function (a, b) {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });
// console.log(courses);

//testing the elements pf an array

// const numbers = [1, 2, 3, -1];
// const allpositive = numbers.every(function (value) {
//   return value >= 0;
// });
// console.log(allpositive);
// const atleastonepositive = numbers.some(function (value) {
//   return value >= 0;
// });
// console.log(atleastonepositive);

//filtering an array
// const filtered = numbers.filter(function (value) {
//   return value >= 0;
// });

// console.log(filtered);
// const filtere = numbers.filter((n) => n >= 0);

// console.log(filtere);

//mapp in array
// const numbers = [1, 2, 3, 4, -1];
// const filtered = numbers.filter((n) => (n) => 0);
// console.log(filtered);
// const items = filtered.map((n) => "<li>" + n + "</li>");

// console.log(items);

//reducing an array
const numbers = [1, 2, 3, -1];
// let sum = 0;
// for (let n of numbers) sum += n;
// console.log(sum);

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);
