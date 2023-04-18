// function createCircle(radius)
// {
//     return{
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }
//  const circle1=createCircle(1);
//  console.log(circle1);

//  const circle2=createCircle(2);
//  console.log(circle2);

// const myCircle=createCircle(1);
  
// function Circle(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log('draw');
//         };
//     }
//  const circle=new Circle(1);
  
// const circle={
//     radius:1
// };

// circle.color='yellow';
// circle.draw=function(){}

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// const now = new Date();
// const date1=new Date ('january 7 2002 02:00');
// const date2=new Date(2021,9,8,5);
// now.setFullYear(2022);

// const name ='Krishika';
// const message = 'Hi ' + name + ',\n';
// const another =
// `Hi Krishika,
// Thank you for joining my mailing  List.
// Regards,
// Maurya`;

// const message='This is my first message';
// const another = new String('hi');

// const circle={
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
// };
// for(let key in circle)
// console.log(key, circle[key]);
 
// for(let key of Object.keys(circle))
// console.log(key);

// for(let entry of Object.entries(circle))
// console.log(entry);

// if ('color' in circle) console.log('yes');

// const another = {};
// for(let key in circle )
// another[key] = circle[key];

//const another= Object.assign({},circle);

//  const another={...circle};

// console.log(another); 

/*ARRAY*/
//  const numbers=[3,4];
//  numbers.push(5,6);
//  numbers.unshift(1,2);
//  numbers.splice(2,0,'a','b');
//  console.log(numbers);
  
// const numbers=[1,4,3,1,5];
// console.log(numbers.indexOf(2));
// console.log(numbers.lastIndexOf(5));
// console.log(numbers.indexOf(3) !==  1);
// console.log(numbers.includes(5));

// const courses=[
//     {id:1, name:'a'},
//     {id:2, name:'b'},
//];
// const course = courses. findIndex(function(course)
// {
//     return course.name ==='a';
// });
// const course = courses. find(course => course.name ==='a');
// console.log(course);

//  const numbers=[1,2,3,4];
//  const last=numbers.pop();
//  console.log(numbers);
//  console.log(last);
 //const first=numbers.shift();
 //numbers.splice(2,2);

// let numbers=[6,7,8,9];
// let another= numbers;

// numbers=[];

// numbers.length=0;

// numbers.splice(0, numbers, length);

// while(numbers.length>0)
// numbers.pop();
// console.log(numbers);
// console.log(another);

// const first=[1,2,3];
// const second=[4,5,6];

//const combined = first.concat(second);
// const combined =[...first,'a',...second,'b'];
// const slice= combined.slice();

//  console.log(combined);
//  console.log(slice);

//const numbers=[1,-1,2,-3,-6,3];
// for(let number of numbers)
// console.log(number);

// numbers.forEach((index, number)=> console.log(index, number));

// const message = 'This is my first message';
//  const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// const courses=[
//     {id:1, name:'krishika'},
//     {id:2, name:'Maurya'},
// ];

// courses.sort(function(a,b){
//     // const nameA=a.name.toLowerCase();
//     // const nameB=b.name.toLowerCase();

//     if(a.name < b.name)return -1;
//     if(a.name > b.name)return 1;
//     return 0;
// });
// console.log(courses);

// const atLeastOnePositive = numbers.some(function(value){
// return value >= 0;
// });

// console.log(atLeastOnePositive);


// const filtered = numbers.filter(n=>n>=0);
// console.log(filtered);

// const numbers=[1,-1,2,3];
//  const sum=numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue);
 
//     let sum=0;
//     for(let n of numbers)
//     sum +=n; 

//     console.log(sum);
