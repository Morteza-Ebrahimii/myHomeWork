/** @format */

// ? Question-1:write a function to give this array and split negative numbers and positive numbers.
const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];

// !Answer:

// function getNegative(array) {

//     let negatives = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negatives.push(array[i]);
//         }
//     }
//     return negatives;
// }
// console.log(getNegative(numbers));



// function getPositive(array) {

//     let positives = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             positives.push(array[i]);
//         }
//     }
//     return positives;
// }
// console.log(getPositive(numbers));



// ? Question-2:write a function to find the biggest number in this  array and push to a new array
 const findBigNumber = [5, 2, -10, 50, 35];
// !Answer:

// let largest = findBigNumber[0]
// for (let i = 0; i < findBigNumber.length; i++) {
//     if (findBigNumber[i] > largest) {
//         largest = findBigNumber[i];
//     }
// }
// console.log(largest);



// ? Question-3:write a function to remove all the items which are not number from the array and show a new array.
// const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null];

// !Answer:


// const notNumberArray = (nums) => {
//     for (let i = nums.length - 1; i >= 0; i--) {
//       if (typeof nums[i] !== 'number') {
//         nums.splice(i, 1);
//       }
//     }
//     return nums;
//   };
  
//   console.log(notNumberArray(["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]));

// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number
// todo3: calculate the sum of all its numbers
// !Answer:

const sum = [1, 100, 2, 96, -22].reduce(add, 0);
function add(accumulator, a) {
  return accumulator + a;
}
console.log(sum); 

// ? Question-5:write a function to reverse a string.(hint:first,convert to array,but answer must to be string)
// ? "google" => "elgoog"
// ! you can search how to reverse string //پ نه ؟

// !Answer:
function reverse(g){
  return g.split("").reverse().join("");
}console.log(reverse("google"));