// function log(message){
//     console.log(message);
// }
// var message="Hello World !!!....";
// log(message);
// function dosomothing()
// {
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log("finally :"+i);
// }
// dosomothing();
// //define types of variable 
// let decimal: number = 6;
// let done: boolean = false;
// let color: string = "blue";
// let list: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];
// //const type variable 
// const Colorred=2;
// const ColorGreen=1;
// const Colorpurple=3;
// const Colorblue=8;
// // define enum
// enum Color{Red,Green,Blue};
// let backgroundcolor=Color.Blue;
// // Assertion
// let message;
// message="shivangi shah";
// let endsWithC=message.endsWith('c');
// let endsWithb=(<string>message).endsWith('c');
// let endsWitha=(message as string).endsWith('c');
// // define the Arrow function 
// let fun = Function => console.log("bsdhbchsdb");
// //define the variable in interface type
// interface Point{
//     x:number,
//     y:number
// }
// let drawpoint =(point:Point)=>{
// }
// drawpoint ({x:23,y:3})
//how to define class
var Person = /** @class */ (function () {
    function Person(x, y) {
        //    this.x =x;
        //    this.y =y;
        console.log("x : " + x + "y : " + y);
    }
    Person.prototype.draw = function () {
        console.log("X is " + this.x + " Y is " + this.y);
        //.....
    };
    return Person;
}());
var person = new Person(3, 5);
// person.x=65;
// person.y=67;
person.draw();
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("hello is constructor");
    }
    return Animal;
}());
var animal = new Animal();
