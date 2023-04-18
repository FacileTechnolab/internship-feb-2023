// const numbers = [3,4];
// numbers.push(9,7);//at end of array add element
// numbers.unshift(1,2);//begining array of add element
// numbers.splice(2,0,6,'b');//middle of add data[position,delete data,add element]
// console.log(numbers);
// console.log(numbers.indexOf(9,5));
// numbers.push(9,3);
// console.log(numbers);
// console.log(numbers.lastIndexOf(9));
// console.log(numbers.indexOf(1) != -1);
// console.log(numbers.includes(4));
// const course=[
//     {
//         id:1,name:'a'
//     },
//     {id:2,name:'b'},
// ];
// // const courses=course.find(function(courses){
// //     return courses.name ==='a';
// // });
// const courses=course.find(courses => courses.name ==='a');//arrow function 
// console.log(courses);
/*removing element in array*/
// const numbers = [1,2,3,4,5,6,7];
// const last=numbers.pop();
// console.log(numbers);
// console.log(last);//end element delete
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);//start element delete
// const middle=numbers.splice(2,1);
// console.log(numbers);
// console.log(middle);//middle element delete[position,how many element delete]

/*empty array*/
// let number = [1,2,3,4,5];
// //solution1
// // number=[];
// //solution2
// //number.length=0;
// //solution3
// number.splice(0,number.length);
// console.log(number);

/*combining array*/
// const first = [1,2,3];
// const second = [4,5,6];
// const combine = first.concat(second);
// console.log(combine);
// const slice = combine.slice(2,4);
// console.log(slice);
//SPEREAD OPERATOR
// const first = [1,2,3];
// const second = [4,5,6];
// const combined = [...first,'a',...second];
// //const slice = combined.slice(); or
// const copy = [...combined];//or
// console.log(copy);
// loop(for,foreach)
// const number=[1,2,3];
// for(let numbers of number)
//   console.log(numbers);
// number.forEach((numbers,index) => console.log(numbers));
// JOINIG ARRAY
// const number = [1,2,3];
// const joined =  number.join(',');
// console.log(joined);
// const message = "this is my first message"
// const part = message.split(' ');
// console.log(part);
// const combined = part.join('-');
// console.log(combined);
//SORTING ARRAY
// const number=[2,3,1];
// //number.sort();
// // console.log(number);
// number.reverse();
// console.log(number);
//object sorting
// const course = [
//     {id:1,name:'Node.js'},
//     {id:2,name:'Javascript.js'},
// ];
// course.sort(function(a,b){
//     if (a.name < b.name)return -1;
//     else if(a.name > b.name) return 1;
//     return 0;
// });
// console.log(course);
//TESTING ELEMENT OF AN ARRAY
// const numbers=[1,2,3,-1];
// const allPositive  = numbers.every(function(value){
//   return  value >=0;
//   });
//   console.log(allPositive);
// const numbers=[1,2,3,-1];
// const atLeastOnePositive  = numbers.some(function(value){
//    return  value >=0;
//    });
//    console.log(atLeastOnePositive);
//    //   FILTERING ARRAY
//    const number = [1,-1,2,3];
//    const filtered = number.filter(function(value){
//       return value >= 0;
     
//     } );
//    console.log(filtered);
   //MAPPING IN ARRAY
//    const numbers = [1,-1,2,3];
//    const filtered = numbers.filter(n => n >= 0);
//    const items = filtered.map(n => {
//     const obj = {value:n};
//     return obj;
//    });
//    console.log(items);
//REDUCING ARRAY
const number = [1,-1,2,3];
const sum = number.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
console.log(sum);

