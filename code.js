// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sum(a, b) {
    if (typeof a === "string" || typeof b === "string") return false;
    return a + b;
}

function sayHello(input) {
    return "Hello, " + input + "!";
}

function isNumeric(input) {
    return !isNaN(parseFloat(input));
}

function isFive(input) {
    if (typeof input === "string" || typeof input === "boolean") return false;
    if (!isNumeric(input)) return false;
    if (parseFloat(input) === 5) return true;
    return false;
}


function isEven(input) {
    if (typeof input === "string" || typeof input === "boolean" || input == Infinity) return false;
    if (!isNumeric(input)) return false;
    return (parseFloat(input) % 2 === 0)
}

function isVowel(input) {
    let vowelArray = ["a", "e", "i", "o", "u"];
    // console.log(input);
    if (typeof input != "string" || typeof input === "boolean" || input == Infinity) return false;
    // if (input.toLowerCase() === "a" || input === 4) return false;
    // console.log(input);
    // console.log(vowelArray.indexOf(input.toLowerCase()) >= 0);
    return vowelArray.indexOf(input.toLowerCase()) >= 0;
}

function add(num1, num2){
return num1 + num2;
}