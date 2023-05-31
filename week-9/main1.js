var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function dosomthing() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally:" + i);
}
dosomthing();
//types variable
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColoreGreen = 0;
var ColoredBlue = 1;
var ColoredRed = 2;
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
console.log(backgroundColor);
//type assertion
var str = "geeksforgeeks";
console.log(str);
var len = str.length;
console.log(len);
//Arrow functio
var sum = function (a, b) { return a + b; };
console.log("SUM: " + sum(5, 15));
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
var Counst = /** @class */ (function () {
    function Counst(a, b) {
        a = a;
        b = b;
    }
    Counst.prototype.add = function () {
        console.log('A: ' + this.a + ', B: ' + this.b);
    };
    return Counst;
}());
var counst = new Counst();
counst.add();
//access modifier
//public
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var stud = new Student();
stud.stuCode = 1022;
stud.stuName = "Mosh Gameti";
console.log(stud.stuCode + " " + stud.stuName);
//private
var StudentPriva = /** @class */ (function () {
    function StudentPriva(code, name) {
        this.studpriCode = code;
        this.studpriName = name;
    }
    StudentPriva.prototype.display = function () {
        return ("My uniquecode:".concat(this.studpriCode, ", my name : ").concat(this.studpriName, "."));
    };
    return StudentPriva;
}());
var stuprivate = new StudentPriva(1234, "fhdsfhkdsfd");
console.log(stuprivate.display());
//protected
var StudeProt = /** @class */ (function () {
    function StudeProt(codepro, namepro) {
        this.studproCode = codepro;
        this.studproName = namepro;
    }
    return StudeProt;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(codepro, namepro, depart) {
        var _this = _super.call(this, codepro, namepro) || this;
        _this.depart = depart;
        return _this;
    }
    Person.prototype.getElevatorPitch = function () {
        return ("My unique code: ".concat(this.studproCode, ", my name: ").concat(this.studproName, " and I am in ").concat(this.depart, " Branch."));
    };
    return Person;
}(StudeProt));
var joeRoot = new Person(1, "JoeRoot", "CS");
console.log(joeRoot.getElevatorPitch());
//readonly
var Company = /** @class */ (function () {
    function Company(countName) {
        this.country = "India";
        this.name = countName;
    }
    Company.prototype.showDetail = function () {
        console.log(this.name + " " + this.country);
    };
    return Company;
}());
var comp = new Company("JovaPoint");
comp.showDetail();
