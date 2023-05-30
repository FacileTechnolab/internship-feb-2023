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
class Person{
    x:number;
    y:number;
    constructor(x?:number , y?:number){
    //    this.x =x;
    //    this.y =y;
    //    x=7;
    //    y=8;
    console.log("x : "+x+"y : "+y);

    }
    draw(){
        console.log("X is "+this.x+" Y is "+ this.y);
        //.....
    }
    // getDistance(another:Person)
    // {
    //     //....
    // }
}
let person= new Person();
// person.x=65;
// person.y=67;
person.draw();

class Animal {
    constructor(){
        console.log("hello is constructor");
    }
}

let animal=new Animal();
