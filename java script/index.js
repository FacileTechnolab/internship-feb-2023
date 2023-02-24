// let name = 'Krishika';
// let age = 30;
// let isApproved = false;
// let firstName = undefined;
// let selectedColor = null;
 
let person = {
    name :'Krishika',
    age: 30
};

//dot notation
person.name='dipali';

//Bracket Notation
person['name'] = 'sweta';
console.log(person.name);

let selectedColors=['red','blue'];
selectedColors[2]=1;
console.log(selectedColors.length);

function greet(name, lastName){
    console.log('Hello '+ name+' ' + lastName);
}
greet('krishika','Maurya');
