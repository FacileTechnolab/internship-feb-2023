// function log(message)
// {
//     console.log(message);
// }
// var message="hello world";
// log(message);
// function doSomething()
// {
//     for( let i=0;i<5;i++)
//     {
//         console.log(i)
//     }
//     console.log('finally'+i);
// }
// doSomething();
// let count1 = 5;
// count1 = 'j';
var c1 = 2;
c1 = 'h';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a,false'];
var Colorred = 0;
var Colorgreen = 1;
var Colorblue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
