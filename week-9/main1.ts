function log(message) {
     console.log(message);
 }

var message = 'Hello World';
log(message);



function dosomthing(){
     for(var i = 0; i < 5 ; i++)
    {
        console.log(i);
    }
    console.log("finally:" + i);
}
 dosomthing();

//types variable
let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number[] = [1, 2, 3];
let f : any[] = [1, true, 'a', false];


const  ColoreGreen = 0;
const  ColoredBlue = 1;
const  ColoredRed = 2;

enum  Color {Green = 0, Blue = 1, Red= 2 };
let backgroundColor = Color.Blue;
console.log(backgroundColor);

//type assertion
let str: unknown = "geeksforgeeks";
console.log(str);
  
let len: number = (str as string).length;
console.log(len);

//Arrow functio
let sum = (a: number, b: number) => a + b;  
console.log("SUM: " +sum(5, 15));  
