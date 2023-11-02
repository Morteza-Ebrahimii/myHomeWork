/*
Write a code to show if it is triangle or not and which type of triangle is this by its angles(you have 1.to use if, else if, else, ||, &&) :
1.solve these puzzles: 👇
*/

const angleOne = 30;
const angleTwo = 90;
const anglethree = 60;
// const triangle = angleOne + angleTwo + anglethree;

// 2.Is it  a triangle or not?
if (angleOne + angleTwo + anglethree === 180) {
    console.log("This is a triangle");

 if (angleOne === angleTwo && angleTwo === anglethree) {
    console.log("And equilateral triangle too")
}
else if (angleOne === 90 || angleTwo === 90 || anglethree === 90) {
    console.log("This is a right triangle");
}
}
else {
    console.log("This is not a triangle");
}



// // 2-What does this code return?
// if (!null) {
//     return 'coffee';
//   } else if (![]) {
//     return 'chai';
//   }

// return coffee


// 3-Which one is truthy ?
// 1- ""
// 2- ''
// 3- "false" this one is truthy
// 4- 0
