 /*
 //--> Let const var
 console.log("Animesh")

 console.log ("Kya be lawde kaise ho? ")

 const AccountId = "1234556789"
 let AccountEmail = "animesh@gmail.com"
 var AccountPassword = "12345" // isue with var in block and functional scope
 let AccountState;//value assign nhi matlab undefined hai ye


 //  AccountId = "9876543210" // const cant be changed
 AccountEmail = "Ani12345@gmail.com"
 AccountPassword = "54321"

 
 console.table([AccountId, AccountEmail,AccountPassword])

 console.log(AccountId)
 console.log(AccountState)
 */
//  "use strict"  // matlab use newer version of js
// alert(3+3);

/*
  //-->Datatypes and ECMA standards

let name = "Animesh"; // (String)
let age = 25; // (Number)
let isDeveloper = true; // (Boolean)
// (null)=> Standalone value
// (undefined)=>
// (Symbol) =>unique



console.table([name, age,isDeveloper,])


console.log(typeof name); 
console.log(typeof null) // =>object  (default in js like older version)
console.log(typeof undefined)  //=>undefined
*/

//->Datatyope conversion confusion

// let num = "23";
// console.log(typeof num)
// let valueInNumber = Number (num);// Converting string to number
// console.log(typeof valueInNumber);



                                                            //RESTART//




  // ___________________________________________     MATHS     ___________________________________________

//  console.log(Math);
//  console.log(Math.abs(-4)); //negative --> positive
 
// console.log(Math.round(4.6)); //5 rounding off to nearest integer
// console.log(Math.round(4.2));//4 

// console.log(Math.ceil(9.9));//10  -->Uppar value hamesha
// console.log(Math.ceil(9.1));//10

// console.log(Math.floor(4.9));// 4 --> niche wala value hamesha
// console.log(Math.floor(4.1));//4

// console.log(Math.sqrt(25));

// console.log(Math.max(1,3,5,7,9));
// console.log(Math.min(1,3,5,7,9));

// console.log(Math.random());
// console.log((Math.random())*10); //Ye zero se 9 tal dega and zero bhi sakta hao
// console.log(((Math.random())*10)  + 1  ); // for avoiding zero

// console.log(Math.floor((Math.random())*10) + 1  ); // for avoiding zero and only integer value

// //Agar kisi range me random value lena ho tab

// const min = 10;
// const max = 20;

// console.log( Math.floor((Math.random()*(max - min) + 1)) + min) // Between 10-20



 // ___________________________________________     DATES     ___________________________________________

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());



// let myNewDate = new Date(2023, 1, 24);
// console.log(myNewDate.toDateString()); //Fri Feb 24 2023

// let myDate2 = new Date("02-21-2025");
// console.log(myDate2.toLocaleString()); //21/2/2025, 12:00:00 am


// let myTimeStamp = Date.now();
// // console.log(myTimeStamp); // 1643723400000

// console.log(Math.floor(Date.now()/1000)); // 1643723400000

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +  1); //yahan month zero se start hota hai so 1 add kar dete hain tab exact date milta hai
console.log(newDate.getDay() ); //returns a number from 0 (Sunday) to 6 (Saturday)
console.log(newDate.getDay() + 1 ); //returns a number from 0 (Sunday) to 6 (Saturday)

console.log(newDate.getDate());

