let hour = 15;
if(hour >=6 && hour<12){
    console.log("Good Morning");
}
else if(hour>=12 && hour<18){
    console.log("good afternoon");
}
else{
    console.log("good evening");
}
/**switch case */
let role='guest';
switch(role){
    case 'guest':
        console.log("guest user");
        break;
    case 'moderator':
        console.log("moderator user");
        break;
    default:
        console.log("default user");    

}
/***loop */
//for loop//
// for(let i=0;i<5;i++){
//     console.log("hello",i)
// }
//**while loop */
// let i=0;
// while(i<5){
//     i++;
//     console.log("hello",i)
// }
/*do while*/
// let i=0;
// do{
//     i++;
//     console.log("hello",i);
// }while(i<5)
/*infinite loop*/
// let i=0;
//  do{
     
//    console.log("hello",i);
//  }while(i<5)
/*for_in*/
const person = {
    name:'jack',
    age:23
}
for(let key in person)
{
    console.log(key,person[key]);
}
// 

// for (let index in colors)
//   console.log(index,colors[index]);
 const colors=['red','blue','green']   
for (let color of colors)
  console.log(color);