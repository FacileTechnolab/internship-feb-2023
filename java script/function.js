function walk(){
    console.log('walk');
}

const run = function(){
    console.log('run');

};
let move = run;
run();
move();


function hello() {
    console.log(arguments[0]);
}
  
hello("good");

function interest(principal, rate=3.5, years){
    return principal * rate/100* years;
}
console.log(interest(10000, undefined, 5));
