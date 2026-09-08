// define the type(s) for 'value'
function lengthOrSquare(value: string | number){
    let response
    if (typeof value == "string") {
        // if type is string, retrurn the length of the string
        const response: string = `${value.length}`;
        return response
    } else if (typeof value == "number") {
        // if type is number return the square of the number
        const response: number = Math.sqrt(value);
        return response
    }
}

// Prompt the user to enter a value as either a string or a number
const userInput = prompt("Enter either a number or a string");
const parsedValue = Number(userInput) || userInput;

// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
