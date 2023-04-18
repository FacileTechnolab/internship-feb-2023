// let name = 'Krishika';
// let age = 30;
// let isApproved = false;
// let firstName = undefined;
// let selectedColor = null;
 
// let person = {
//     name :'Krishika',
//     age: 30
// };

// //dot notation
// person.name='dipali';
// //Bracket Notation
// person['name'] = 'sweta';
// console.log(person.name);

// let selectedColors=['red','blue'];
// selectedColors[2]=1;
// console.log(selectedColors.length);

// function greet(name, lastName){
//     console.log('Hello '+ name+' ' + lastName);
// }
// greet('krishika','Maurya');


 /*OPERATOR
let x = 10;
let y = 3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(x++);
console.log(x);
console.log(--x);

console.log (x+=5);
console.log (x-=5);
console.log (x*=5);
console.log (x/=2);

let x=1;

console.log(x>1);
console.log(x<1);
console.log(x>=1);
console.log(x<=1);
console.log(x===1);
console.log(x!==5);

console.log(1===1);
console.log('1'===1);
console.log(1==1);
console.log('1'==1);

let points=90;
let type=points>100?'gold':'Silver';

console.log(type);

let highIncome=false;
let goodCreditScore=false;
let eligibleForLoan= highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);
let applicationRefused=!eligibleForLoan;
console.log('Application Refused',applicationRefused);

let x=2+3*5;
console.log(x);

let a= 'red';
let b='blue';

let c=a;
a=b;
 b=c;

console.log(a);
console.log(b);

let x = 10;
let y = (x > 5) && (x < 15); 
let x = 5; 
console.log (x += 3); */

/* control flow */
  
// let hour =20;
// if (hour>=6 && hour<12)
//     console.log('Good Morning');
// else if (hour>=12 && hour<18)
//     console.log('Good Afternoon');
// else
//     console.log('Good Evening');
     
// let role ='';
//  switch(role)
//  {
//     case 'guest':
//         console.log('Guest User');
//         break;
//      case 'moderator':
//         console.log('Moderator User');
//         break;
    
//     default:
//         console.log('Unknown User');
//  }


 /*LOOP
for(let i=0; i<5; i++)
{
    console.log('Hello World');
}
let i=1;
while (i<=6)
{
    if (i%3 !== 0) console.log(i);
    i++;
}
let i=3;
do{
    if(i%2!==0) console.log(i);
    i++;
}while(i<=5);
  
let i=0;
while(i<5){
    console.log(i);
    //i++;
}

while(true)
{
}

let x=0;
do{
    x++;
}while(x<5);

for(let i=0; i<10;)

const person={
    name:'Krishika',
    age:21};
for(let key in person)
console.log(key, person[key]) ;

const colors=['red','green','blue'];
for(let color of colors)
console.log( color);

 let i=0;
 while(i<=10){
    if(i===8)break;
    if(i%2===0){
        i++;
        continue;
    }
    console.log(i);
    i++;
 }*/

/*  maximum to number*/
//  let number=max(3,3);
//  console.log(number);

//  function max(a,b){
//     return (a>b) ? a : b;
//  }
//  /* Landscap and protrait */
//  console.log(isLandscape(800,600));
//   function isLandscape(width , height)
//   {
//     return (width>height);
//   }
  /*FizzBuzz*/
//     const output= fizzBuzz(15);
//     console.log(output);
//     function fizzBuzz(input) { 

//         if((input%3===0) && (input%5===0))
//         return'FizzBuzz';

//         if (typeof input!=='number')
//         return'Not a number';

//         if(input%3===0)
//         return'Fizz';

//         if(input%5===0)
//         return'Buzz';

//         return input;
// }
 /*Demerit point*/
    // checkSpeed(130);
    // function checkSpeed(speed)
    // {
    //     const speedLimit=70;
    //     const kmPerPoint=5;

    //     if(speed<speedLimit+kmPerPoint)
    //     {
    //         console.log('ok');
    //         return;
    //     }
    //     const point=Math.floor((speed-speedLimit)/kmPerPoint)
    //     if(point>=12)
    //         console.log('License suspended');
    //     else
    //     console.log('Points',points);

    // }
/*Even and Odd*/    
 
// showNumbers(10);

// function showNumbers(Limit)
// {
//     for(let i=0; i<=Limit; i++)
//     {
//         const message=(i%2===0)?'EVEN':'ODD'
//         console.log(i,message);
//     }
// }
  





