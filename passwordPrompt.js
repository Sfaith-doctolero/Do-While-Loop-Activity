//Name: Javinar, Stephanie Faith D. 
// Course, Year, and Section : BSCS 1D
//hardcoded password - directly written in the code 
const correctPassword = "correctPassword";
let userInput;
do {
    userInput = prompt("Enter your password:");
    if (userInput !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userInput !== correctPassword);

console.log("Access granted.");
