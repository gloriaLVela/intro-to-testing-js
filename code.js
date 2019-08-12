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
    // if (!isNumeric(input)) return false;
    if (parseFloat(input) === 5) return true;
    return false;
}
