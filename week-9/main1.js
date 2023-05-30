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
