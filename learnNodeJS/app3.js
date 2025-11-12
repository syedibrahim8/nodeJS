import readline from "readline-sync"

let fname = readline.question("🥷🏻 Enter your name:");
let age = readline.questionInt("🎂 Enter your age:");
let gender = readline.question("🧑🏻‍❤️‍👩🏻 Enter you gender [M/F/O]:");
let city = readline.question("📍 Enter your city:");
let country = readline.question("🗺️ Enter your country:");
let email = readline.questionEMail("📧 Enter your email:");
let phone = readline.questionInt("📱 Enter your phone number:");
let occ = readline.question("💼 What is your occupation:");
let hobby = readline.question("🎨 What is your hobby:");
let lang = readline.question("💻 Favourite programming language:");
let exp = readline.question("⏳ Years of experiene in coding:");
let food = readline.question("🍕 Favourite food:")
let movie = readline.question("🍿 Favourite movie:");
let color = readline.question("🎨 Favourite color:")
let std = readline.question("🧑🏻‍🎓 Are you a student? (y/n):");
let code = readline.question("💻 Do you like coding? (y/n):");
let goal = readline.question("🎯 What's your biggest goal:");
let pet = readline.question("🐱 Do you have a pet:(y/n)");
let petName;
if(pet == "y" || pet == "Y" || pet == "YES" || pet == "yes" || pet == "Yes"){
   petName = readline.question("🦴 Enter name of your pet:")
}
let admire = readline.question("🫡 Whom do you admire the  most?:");
let player = readline.question("⚽ Who is your favourite football player?:");
console.log(`\n`);
console.log(`******************Person Details******************`);

console.log(`Name                  : ${fname}`);

if(age>100){
    console.log("Age                   : Invalid Input");
}else{
    console.log(`Age                   : ${age}`);
}

if(gender == "m" || gender == "M" || gender == "male" || gender == "Male" || gender == "MALE"){
    console.log(`Gender                : Male`);
}else if(gender == "f" || gender == "F" || gender == "female" || gender == "Female" || gender == "FEMALE"){
    console.log("Gender                : Female");
}else if(gender == "o" || gender == "O"){
    console.log("Gender                : LGBTQ")
}else{
    console.log("Gender                : Invalid Input")
}
console.log(`City                  : ${city}`);
console.log(`Country               : ${country}`);
console.log(`Email                 : ${email}`);
console.log(`Mobile                : ${phone}`);
console.log(`Occupation            : ${occ}`);
console.log(`Hobby                 : ${hobby}`);
console.log(`Programming Lanaguage : ${lang}`);
console.log(`Experience in Coding  : ${exp}`);
console.log(`Favourite Food        : ${food}`);
console.log(`Favourite Movie       : ${movie}`);
console.log(`Favourite Color       : ${color}`);

if(std == "y" || std == "Y" || std == "yes" || std == "YES" || std == "Yes"){
    console.log(`Student               : Yes`);
}else if(std == "n" || std == "N" || std == "NO" || std == "no" || std == "No"){
    console.log("Student               : No");
}else{
    console.log(`Student               : Invalid Input`);
}

if(code == "y" || code == "Y" || code == "yes" || code == "YES" || code == "Yes"){
    console.log(`Likes Coding          : Yes`);
}else if(code == "n" || code == "N" || code == "no" || code == "No" || code == "NO"){
    console.log("Likes Coding          : No");
}else{
    console.log(`Likes Coding          : Invalid Input`);
}

console.log(`Goal                  : ${goal}`);

if(pet == "y" || pet == "Y" || pet == "yes" || pet == "YES" || pet == "Yes"){
    console.log(`Pet Name              : ${petName}`);
}else if(pet == "n" || pet == "N" || pet == "No" || pet == "NO" || pet == "no"){
    console.log("Pet Name              : Null");
}else{
    console.log(`Pet Name              : Invalid Input`);
}

console.log(`Role Model            : ${admire}`);
console.log(`Fav Football Player   : ${player}`);
console.log(`**************************************************`);


