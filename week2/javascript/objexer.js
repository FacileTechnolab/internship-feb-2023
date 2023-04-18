// let address={
//   street:'a',
//   city:'b',
//   zipCode:'c'
// };
// function showAddress(address){
//     for(let key in address)
//      console.log(key,address[key]);
// }
// showAddress(address);
//factory method
// let adress=createAddress('a','b','c');
// console.log(adress)
// function createAddress(street,city,zipCode){
//   return {  
//     street,city,zipCode
// }; 
// }
//constructor method
// let address1 = new Address('a','b','c');
// let address2 = new Address('a','b','c');
// let address3=address1;

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2)); 
// console.log(areSame(address1,address3));
// function Address(street,city,zipCode){
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// function areEqual(address1, address2){
//   return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode;
// }
// function areSame(address1,address2){
//   return address1 === address2;
//    }
//blog post object
// let post={
//   title:'a',
//   body:'b',
//   author:'c',
//   views:10,
//   comments:[
//     {author:'a',body:'b'},
//     {
//       author:'c',body:'z'
//     },
//   ],
//   isLive:true
// };
// console.log(post);
function Post(title,body,author){
  this.title=title;
  this.body=body;
  this.author=author;
  this.views=0;
  this.comments=[];
  this.isLive=false;

}
let post = new Post('a','b','c');
console.log(post);
