// const btn = document.querySelectorAll(".btn");
// const input_type = document.querySelectorAll(".input_type)");

// let arr = [];

// btn.addEventListener('click'),(e) => {
//     arr.push({title:btn.value})
//     console.log(arr);
// }

// let arr = [];
// let submitForm = document.querySelector("#submit");
// let inputText = document.querySelector("#input");

// submitForm.addEventListener("click", (e) => {
//   if (val.length) = submitForm.value;
//   data.push({ title: val });
//   console.log(data);
// });



// let str = "ma"
// let arr = [
//     {
//         name: "olma",
//     price:12000
//     },
//     {
//         name:"anor",
//         price:40000
//     },
//     {
//         name:"mandarin",
//         price:23000
//     }

// ]

// let newArr = arr.filter((el) => el.name.includes("ma"));
// console.log(newArr);








// vazifa


"use strict";

//  data type  : 8 ta , 2 turga bo'linadi
//  premative and reference

// let arr=[1,2,3,4,5,6,8,9,10];
// let slice1 = arr.slice(0,4);
// let splice1= arr.splice(0,5);


// console.log("sp",splice1);
// console.log(slice1);
// console.log(arr);


const arr= [1,2,3,4,5,6,8,9,10];

arr.every((val, index, arr) =>{
    console.log(index);
})


function isBigEnough(element, index, array) { 
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough); // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true