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

//class
// class Point {
//     x: number;
//     y: number;

//     draw(){
//         console.log('X: '+this.x+ ', Y: '+this.y);
//     }
//     getDistance(another: Point){

//     }
// }
// let point : Point=new Point;
// point.x=89;
// point.y=76;
// point.draw();

//counstuctor
class Counst{
    a: number;
    b: number;


    constructor(a?: number, b?: number){
         a = a;
         b = b;
    }
    add(){
        console.log('A: '+this.a+ ', B: '+this.b);
    }
}
let  counst : Counst= new Counst();
counst.add();


//access modifier
  //public
  class Student{
    public stuCode: number;
    stuName: string;
  }
  let stud = new Student();
  stud.stuCode = 1022;
  stud.stuName = "Mosh Gameti";

  console.log(stud.stuCode + " "+ stud.stuName);

  //private
  class StudentPriva{
    public studpriCode: number;
    private studpriName: string;
    constructor(code: number, name: string){
     this.studpriCode = code;
     this.studpriName = name;
     
    }
    public display(){
        return (`My uniquecode:${this.studpriCode}, my name : ${this.studpriName}.`);
    }
  }
  let stuprivate:StudentPriva = new StudentPriva(1234, "fhdsfhkdsfd");
  console.log(stuprivate.display());

  //protected
  class StudeProt{
    public studproCode : number;
    protected studproName : string;
    constructor(codepro:number, namepro:string){
         this.studproCode = codepro;
         this.studproName = namepro;

    }
   
  }
  class Person extends StudeProt{
    private depart:string;
    constructor(codepro:number, namepro:string, depart:string){
        super(codepro, namepro);
        this.depart = depart;
    }
    public getElevatorPitch() {  
        return (`My unique code: ${this.studproCode}, my name: ${this.studproName} and I am in ${this.depart} Branch.`);  
    }
  }
  let joeRoot: Person = new Person(1, "JoeRoot", "CS");  
  console.log(joeRoot.getElevatorPitch());  

  //readonly
  class Company{
    readonly country:string = "India";
    readonly name: string;
    constructor(countName:string){
        this.name = countName;
    }
    showDetail(){
        console.log(this.name+ " "+ this.country);
    }
  }
  let comp:Company = new Company("JovaPoint");
  comp.showDetail();