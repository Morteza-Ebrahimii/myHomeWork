// 1. Write a code to extract a specified number of characters from a string.
// It seems that this question can be answered in two ways
let mentor = "alimohamadi";
console.log(mentor.indexOf("m","4"));

let mentor1 = "kashayar yaghma"
console.log(mentor1.slice("7","-5"));


// 2. Write a code to convert a string into abbreviated form.(Key Words => Key W)
let mentor3 = "alimohammadi";
console.log(mentor3.slice("3","-4"));


// 3. Write a code that hides email addresses by replacing the first 5 characters with ( * ) to
// prevent unauthorized access.
let password = "khashayar@gmail.com"
console.log(password.replace("khash","*****"));

// 4. Write a code to concatenate a given string n times together.(Random times between 1 and  100)
let leg = "=درود بر طراح سوال="
console.log(leg.repeat(Math.ceil(Math.random() *100)));


// 5. Write a code to insert a given string (“aps”) within a string at a particular position(insert aps
// somewhere between a random string’s letters like your name).
let myName = "MortezAPSrahimi"
console.log(myName.replace("APS","aEb"));

// 6. Write a code to truncate the given string and put ( … ) after 30 characters:
// ● We are using JavaScript in APS for learning web development and it is one of the
// most popular languages among programmers
let aps = "We are using JavaScript in APS for learning web development and it is one of the most popular languages among programmers"
console.log(aps.replace(" for learning web development and it is one of the most popular languages among programmers","..."));

// 7.Write a code to check if a specific word exists in a string.
let specefic = "We are using JavaScript in APS for learning web development"
console.log(specefic.substring(27, 30));

// 8.Convert all 'Hi' in the text below to 'Hello'.:
// “Hi World. Hi everyone. Hi you. Hi be to yar ghadimi, mnm hamon havadar ghadimi.”
let Hello = "Hi World. Hi everyone. Hi you. Hi be to yar ghadimi, mnm hamon havadar ghadimi"
console.log(Hello.replaceAll("Hi","Hello"));

// 9.Write a code that calculates the square root of 16
console.log(Math.sqrt(16));