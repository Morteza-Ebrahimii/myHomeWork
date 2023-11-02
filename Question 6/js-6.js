// /** @format */

// ? Question-1:Write a code, give a number from 0 to 6, and show the day of the week.(If the number is out of range 0 to 6,[ nvalid number. Please enter a number between 0 and 6])
// !Answer:
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let number = 7;
if (number === 0) {
    console.log(day[0]);
} else if (number === 1) {
    console.log(day[1]);
} else if (number === 2) {
    console.log(day[2]);
} else if (number === 3) {
    console.log(day[3]);
} else if (number === 4) {
    console.log(day[4]);
} else if (number === 5) {
    console.log(day[5]);
} else if (number === 6) {
    console.log(day[6]);
} else {
    console.log("nvalid number. Please enter a number between 0 and 6");
}




//  ? Question-2 :Consider this array; if it contains the word 'javascript', print it to the console.The array contains javascript.
// ? otherwise print it. The array does not contain javascript
const languages = ["java", "kotlin", "javaScript", "python", "typeScript"];
// !Answer:
if (languages.indexOf("javascript") !== -1) {
    console.log("The array contains javascript.");
} else {
    console.log("The array does not contain javascript.");
}


// ? Question-3 :Consider this array. Remove the colors blue and yellow.
let colors = ["red", "green", "blue", "yellow", "orange"];
// !Answer:\
console.log(colors.splice(2, 2));
console.log(colors);


// // ? Question-4 :Take these two arrays and convert them into one array.
let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];
// // !Answer:
let plusNumber = primeNumbers.concat(evenNumbers);
console.log(plusNumber.sort());


// ? Question-5:Read these documents and write an example for each method.
// 6-1 https://www.programiz.com/javascript/library/array/includes
let names = ['sara', 'morteza', 'ali', 'mohamad', 'kia']
let check = names.includes('sara')
// let check = names.includes('Sara')
// let check = names.includes('ali', 3)
// let check = names.includes('ali', -3)
console.log(check);

// 6-2 https://www.programiz.com/javascript/library/array/indexof
let city = ['ghom', 'karag', 'mashad', 'tabriz', 'mashhad', 'zanjan', 'mashhad']
let index = city.indexOf('mashhad')
// let index = city.indexOf('mashhad', 4)
// let index = city.indexOf('mashhad', 5)
// let index = city.indexOf('mashad', -5)
console.log(index);


// 6-3 https://www.programiz.com/javascript/library/array/slice
let unde = [6, 12, 13, 14, 40, 124000, 1, 4, 0, 2, 13, 13];
let numbers = unde.slice(6, 10);
// let numbers = unde.slice();
// let numbers = unde.slice(-6, 10);
console.log(numbers);
 
// 6-4 https://www.programiz.com/javascript/library/array/sort
let mentorsInAps = ['ali mohammadi kia', 'khashayar', 'aghil', 'hosien']
console.log(mentorsInAps.sort());

let thisYear = [1,4,0,2]
console.log(thisYear.sort());

let thisYear2 = [1436,1356,113555,125655]
console.log(thisYear2.sort());