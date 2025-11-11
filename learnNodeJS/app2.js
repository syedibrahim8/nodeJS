import readline from "readline-sync"

let fname = readline.question("🙎🏻 Enter your name:")
let age = readline.questionInt("🎂 Enter your age:")
let coding = readline.question("💻 Do you like coding? [y/n]:")
console.log(`---Summary---`);
console.log(`Name:${fname}`);
console.log(`Age:${age}`);
if(coding == "y"){
     console.log("likes coding: yes");
}else{
     console.log("likes coding: no");
}
