//factory method
// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }
// const circle1=createCircle(1);

// //constructor function
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// const circle=new Circle(1);

//dynamic
// const circle={
//     radius:1
// };
// circle.color='yellow';
// circle.draw=function() {}
// delete circle.color;
// delete circle.draw;
// console.log(circle);
//function and object
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// Circle.call({},1);
// const another=new Circle(1);
// //value vs reference
// let number=10;
// function increase(number){
//     number++;
// }
// increase(number);
// console.log(number);
// let obj={value:10};
// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj);
//enum properties of object
// const circle={
//     radius:1,
//     draw() {
//         console.log('draw');
//     }
// };
// for(let key in circle)
//   console.log(key,circle[key]);
//   for(let key of Object.keys(circle))
//   console.log(key);
//   for(let entry of Object.entries(circle))
//   console.log(entry);
//   if ('color' in circle) console.log('yes');
  //clone
//   const circle = {
//     radius:1,
//     draw() {
//         console.log('draw');
//     }
// };
// const another = Object.assign({},circle);
// //const another = {...circle };
// console.log(another);
//garbage collector
// let circle={};
// console.log(circle);
//string primitive
const message=
'this is my\n' +
 '\first\' message';
 const another=
 `this is my
 'first' message
 gygdfbh fhew jgjr 
 er feryhuirs sieijretoitog`;
 console.log(another);
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018,4,11,9);
now.setFullYear(2017);