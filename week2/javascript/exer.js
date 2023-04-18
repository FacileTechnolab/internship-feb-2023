// let number=max(10,3);
// console.log(number);


// function max(a,b){
//     return(a>b)?a:b;
// }
// console.log(islandscape(300,500));
// function islandscape(width,height){
//     return(width>height);
// }
// const output=fizzbuzz(35 );
// console.log(output);
// function fizzbuzz(input){
//     if(typeof input !== 'number')
//       return 'not a number';
//     if(input % 3 ===0)
//      return 'fizz';
//     if(input % 5 ===0)
//       return 'buzz';
//     if((input%3==0)&&(input%5==0))
//      return 'fizzbuzz';  
//      return input;   
// }
//Math.floor(1.3);
// checkSpeed(80);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed<= speedLimit)
//       console.log("ok");
//     else{
//         const points=Math.floor((speed - speedLimit)/5);
//         if(points>=12)
//          console.log('license suspended');
//         else
//           console.log('points',points); 
//     }  

// }
    // showNumbers(10);
    // function showNumbers(limit){
    //     for(let i=0;i<=limit;i++){
    //         const message=(i%2==0)?'even':'odd'
    //         console.log(i,message);
    // }
    // }
    // const isActive=true;
    // if(isActive)
    //   console.log("hello");
    //   //false,undefined,null,zero,'',nan
    //   const array=[0,null,2,3];
    //   console.log(countTruthy(array));
    //   function countTruthy(array){
    //     let count=0;
    //     for(let value of array)
    //      if(value)
    //       count++;
    //       return count;
    //   }
      /**string propertise */
   
// const movie = {
//     title:'a',
//     relesingYear:2012,
//     rating:4.5,
//     director:'b'
// };

// showpropertise(movie);
// function showpropertise(obj){
//     for(let key  in obj){
//         if(typeof obj[key]==='string')
//          console.log(key,obj[key]);
//     }
// }
// console.log(sum(10));
// function sum(limit){
//     let sum=0;
//     for(let i=0;i<=limit;i++)
//     if(i%3===0 || i%5===0)
//     sum+=i;
//     return sum;
// }
// const output=fizzbuzz(3);
// console.log(output);
// function fizzbuzz(input){

// }
// function calculateGrade(marks){
//     const average = calculateAverage(marks);
//     if(average<60) return 'f'; 
//     if(average<70) return 'd';
//     if(average<80) return 'c';
//     if(average<90) return 'b';
//     return 'a';   
// }
//     function calculateAverage(array){
//         let sum=0;
//         for(let value of array)
//          sum+= value;
//          return sum/array.length;
//     }
// showStars(5);
// function showStars(rows){
//     for(let row=1;row<=rows;row++){
//         let pattern='';
//         for(let i=0;i<row;i++){
//             pattern += '*';
//             console.log(pattern);
//         }

//     }
// }
showPrimes(10);
function showPrimes(limit){
    for(let number=2;number<=limit;number++)
            
            if(isprime)console.log(number);
    
}
function isprime(number){
    let isprime=true;
    for(let factor=2;factor<number;factor++)
        if(number%factor ===0)
            return false;
            
        
    
    return true;
}