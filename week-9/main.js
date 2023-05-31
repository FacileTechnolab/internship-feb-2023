// let x=5;
// console.log(x);
// function log(message)
// {
//     console.log(message);
// }
//  var message = 'Hello World';
//  log(message);
// function dosomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally:' );
// }
// dosomething();
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] =[1, true, 'a', false];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color{ Red=0, Green=1, Blue=2, Purple=3};
// let backgroundColor = Color.Red;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// let sum = (x: number, y:number)  =>   x+y;
// console.log("Sum:" +sum (10,20));
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
