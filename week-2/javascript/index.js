console.log('Hello World');
let name = 'Dipali';
console.log(name);
//object
let person = {
    na:'Dipali',
    age : 21
};
console.log(person);
//dot-notation object-properties
person.na = 'Dipali';
console.log(person.na);
//bracket notation  object-properties
person['na'] = 'Krishika';
console.log(person['na']);

let selector = 'na';
person[selector] = 'Sweta';

console.log(person[selector]);

//object-end

//array
let selectColor = ['blue', 'black'];
selectColor[2] = 'green';
selectColor[3] = '6';

console.log(selectColor);
console.log(selectColor.length);

//array-end

//function
function greet(){
    console.log('how are you');
}
greet();
//function call parameter in greet is function and name in parameter and dipali is argumment of greet
function greet(name, lastName)
{
    console.log('how are you? Hello ' + name+ ' ' + lastName);
}
greet('Dipali', 'Kuhad');

function square(number)
{
    return number * number;
}
console.log(square(3));

//operatior
//arithmetic
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(++a);
console.log(--a);
console.log(a--);





//operater-end
//function-end
