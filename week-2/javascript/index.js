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
//function-end

//operatior
//arithmetic
// let a = 10;
// let b = 20;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a++);
// console.log(++a);
// console.log(--a);
// console.log(a--);

//assignment 
// let x = 20;
// x +=5;
// console.log(x);

//comparision
// let i = 2;
// console.log(i > 0);
// console.log(i >= 0);
// console.log(i < 0);
// console.log(i > 0);
// console.log(i <= 0);

// console.log(i === 1);
// console.log(i !== 1);

//equality 
//strict equality(type + value same= true)
// console.log(2 === 2);
// console.log(2 === 1);
// console.log('4' === 4);

//lose equality (typ + value diff = true)
// console.log(5 == 4);
// console.log('5' == 5);
// console.log(true == 0);

//Ternary
// let points = 120;
// let type = points > 100 ? 'good' : 'bad';
// console.log(type);

//logical
//and  && = both true return true 
// let high = true;
// let low = true;
// let incom = high && low ;
// console.log(incom);

//or || = one true return true
// let high = false;
// let low = true;
// let incom = high || low ;

//not ! oposite ans
// let incomtex = !incom;
// console.log(incom);
// console.log(incomtex);

// let userColor = undefined;
// let defualtColor = 'blue';
// let currntColor = userColor || defualtColor;
// console.log(currntColor);


//bitwise
// console.log(1 & 2);
// console.log(1 | 2);

//operator precedence
// let z = [(5 * 4) + 7] - 6;
// console.log(z);
//operater-end

//swaping variable
// let j = 10;
// let k = 11;
// j = j + k;
// k = j - k;
// j = j - k;

// temp = j;
// j = k;
// k = temp;
// console.log(j);
// console.log(k); 

//condition statement
//if-else
// let hour = 20;
// if(hour >= 6 && hour < 12)
// {
//     console.log('good morning');
// }
// else if (hour >= 12 && hour < 18)
// {
//     console.log('goo afternoon');
// }
// else
// {
//   console.log('good morning');
// }

//switch-case
// let role = 'guest';
// switch (role)
// {
//     case'guest':
//      console.log('Guest user');
//      break;
//     case 'moderator':
//      console.log('mod user');
//      break;
//     default:
//      console.log('unknown user');
//      break;
// }

//loops
//for
// for (let i = 0; i <= 5; i++)
// { 
//     console.log('hello world' , i);
// }
// for(let j = 5; j >= 1; j--)
// {
//     if(j % 2 !== 0)
//     {
//         console.log(j);
//     }
// }
//while
// let d = 0;
// while(d <= 5)
// {
//     if(d % 2!== 0){
//      console.log(d);
//      d++;
//     }
// }
//do-while false condition bt at least print statement
// do
// {
//     if(d % 2 !== 0)
//     {
//         console.log(d);
//         d++;
//     }
// }while (i <= 5);


//break
// let p = 0;
// while (p <= 10)
// {
//     if(p == 5)
//     break;
//     if(p % 2 === 0)
//       p++;
//       continue;

// }
// console.log(p);
// p++;

//max-two-number
// let number = max(10 , 20);
// console.log(number);
//     function max(a , b)
// {
//     return (a > b) ? a : b;
// }

//landscape or portrit
// console.log(isLandscape(400 , 300));

// function isLandscape(width , height)
// {
//      return (width > height);
// }

//fizzbuzz
// const output = fizzBuzz(3);
// console.log(output);

// function fizzBuzz(input){
//    if(typeof input !== 'number')
//    {
//     return 'not number';
//    } 
//     if ((input % 3 === 0) && (input % 5 === 0))
//     {
//     return 'fizzbuzz';
//     }
//    if (input % 3 === 0)
//    {
//     return 'fizz';
//    }
//    if (input  % 5 === 0)
//    {
//     return 'buzz';
//    }
//    return input;
// }


//demerit points
// checkSpeed(130);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit)
//     {
//         console.log('ok');
//     }
//     else {
//        const  points = Math.floor(speed - speedLimit) / kmPerPoint;
//        if (points >= 12)
//        {
//         console.log('license supended');
//        }
//        else{
//         console.log('Points' , points);
//        }
//     }
// }

//even odd number print
// showNumbers(10);
// function showNumbers(limit)
// {
//     for (let i = 0; i <= limit; i++)
//     {
//         const msg = (i % 2 === 0) ? 'even' : 'odd';
//     console.log(i , msg);
//     }
   
// }

//star
// showStars(2);
// function showStars(rows)
// {
//     for(let row = 1; row <= rows; row++)
//     {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//         {
//             pattern += '*';
//             console.log(pattern);
//         }
//     }
// }

//prime numbers
// showPrimes(20);
// function  showPrimes(limit){
//     for (let numbers = 2; numbers <= limit; numbers++)
//     {
//         let isPrime = true;
//         for (let factor = 2; factor < numbers; factor++)
//         {
//             if(numbers  % factor === 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime)
//         {
//             console.log(numbers);
//         }
//     }
// }




//objects -basic
// const circle = 
// {
//     radius: 1,
//     location : 
//     {
//         x : 1,
//         y : 1
//     },
//     isVisible : true,
//     draw: function()
//     {
//         console.log('draw');
//     }
// };
// circle.draw();

//value-type
// let num = 10;
// function increase(num)
// {
//     num++;
// }
// increase(num);
// console.log(num);

//refer-type
// let obj = {value: 10};
// function increase(obj)
// {
//     obj.value++;
// }
// increase(obj);
// console.log(obj);


//clone object
//1.spread
// const food = { beef: '🥩', bacon: '🥓' };
// const cloneFood = { ...food };
// console.log(cloneFood);
//2.Object.assign
// const food = {beef: '🥩', bacon: '🥓'};
// const cloneFood = Object.assign({} , food);
// console.log(cloneFood);
//3.JSON
// const food = {beef: '🥩', bacon: '🥓'};
// const cloneFood = JSON.parse(JSON.stringify(food));
// console.log(cloneFood);
