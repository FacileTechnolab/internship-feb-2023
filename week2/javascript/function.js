// //function declaration
// function walk(){
//     console.log("walk");
// }
// //function expression
// const run = function(){
//     console.log("run");
// };
// let move = run;
// run();
// // move();
//ARGUMENTS
// function sum(a,b)
// {
//     console.log(arguments);
//     return a+b;
// }
// console.log(sum(1,2,3,4,5));

// function sum(){
//     let total=0;
//     for(let  value of arguments)
//     total += value;
//     return total;
// }
// console.log(sum(1,2,3,4,5,10));
// function sum(discount,...prices){
//     const total = prices.reduce((a,b) => a+b);
//     return total * ( 1 - discount );
// }
// console.log(sum(0.1,20,30));
//DEFAULT PARAMETER
// function interest (principal,rate=3.5,years=5){
//     return principal * rate / 100 * years; 
// }
// console.log(interest(10000,undefined,5));
//GETTER AND SETTER
//Getter : Access the property
//setter:change(mutate)
// const person = {
//     firstName:"jahanvi",
//     lastName:"gameti",
//     get fullname(){
//         return `${person.firstName}${person.lastName}`;
//     },
//     set fullname(value){
//         const parts = value.split( ' ');
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     }
// };
// person.fullname="virat Kohli";
// console.log(person);
// const person = {
//     firstName:"jahanvi",
//      lastName:"gameti",
//      set fullName(value){
//         if(typeof value !== 'string') 
//          throw new Error('value is not string');
//          const parts = value.split(' '); 
//            if(parts.length !==2)
//             throw new Error("enter first and last name");
//          this.firstName=parts[0];
//          this.lastName=parts[1];
//      }
// };
// try{
//     person.fullName = '';
// }
// catch(e){
//     alert(e);
// }
// console.log(person);
// const color = "red";
// function start(){ 
//     const color = "blue";
//     const message="hi";
//     console.log(color);
// }
// function end(){
//     const message = "bye";
   

// }
// start();
//LET VS VAR
// function start(){
//     for(var i=0;i<5;i++){
//         if(true){
//     var color = 'red'; }
// }
//     console.log(color);
// }
// start();
// var color = 'red';
// let age = 20;
// const video = {
//     title:'a',
//     play(){
//         console.log(this);
//     }
// };
// // video.stop=function(){
// //     console.log(this);
// // };
// function Video(title){
//     this.title=title;
//     console.log(this);
// }
// const v = new Video('b');
// //video.stop();
const video = {
    title:'a',
    tags:['a','b','c','d'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title,tag);
        });
    }
};
 video.showTags();
// function playVideo(){
//     console.log(this);
// }
// playVideo.call({name:"jack"});
// playVideo.apply({name:"jack"});
// playVideo();