console.log("Hello world");
let firstName = "Jahanvi";//string
let age = 23;//number
let isApproved = true;//boolean
let notice;//undefine
//let selectedColor=null;//null
let lastName = "Gameti";
const interestRate = 0.5;//constant value
console.log(firstName);
console.log(lastName);
console.log(interestRate);
let person = {
     firstName: "jahanvi",
     age: 23
};
console.log(person);
// //dot notation
person.firstName = "janvi";
console.log(person.firstName);
//bracket notation
person['firstName'] = 'jack';
console.log(person.firstName);
let selectedColor = ['red','blue'];
selectedColor[2] = 'green';
selectedColor[3] = 'purple';
selectedColor[4]=1;
console.log(selectedColor[0]);
console.log(selectedColor);
console.log(selectedColor.length);
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
//performing function value
function greet(name,age) {
    console.log("hello" +  '  ' + name + ' ' + age);
}
greet('janvi',21);
//function method
function square(number){
    return number * number;
}
console.log(square(2));