// const readline = require("readline-sync");// before 2015
import readline from "readline-sync" // after 2025
let fname = readline.question("What is your name ? :")
console.log(`My name is ${fname}`);
let age = readline.questionInt("What is your age ? :")
if(age<100){
    console.log(`My age is ${age}`);
}else{
    console.log("Invalid age");
}
let college = readline.question("What is your college name ? :")
console.log(`My college nam is ${college}`);
let email = readline.question("What's your email ? :");
console.log(`My email is ${email}`);
let mobile = readline.question("What's your mobile number ? :")
console.log(`My mobile number is ${mobile}`);