// JavaScript Assignment -03
import capitalizeFirstLetter from "./firstLetterCapitalModule.js";
// capitalizeFirstLetter = require("./firstLetterCapitalModule.js");
// Create a function that uses arrow syntax to calculate the square of a number.
let numberSrquare = (num) => {
  return num * num;
};
console.log(
  "Printing the square of a function using arrow function",
  numberSrquare(5)
);
// Implement a function that accepts a string and returns the number of words in it using the spread operator.
function wordsCalculator(parentString) {
  let count = 1;
  parentString.forEach((value) => {
    if (value === " ") count++;
  });
  return count;
}
const myString1 = "Hello I am codded in javascript using es6";
console.log(
  "The word count of the sentence is",
  wordsCalculator([...myString1])
);
// Write a class that represents a person with properties like name, age, and address. Use constructor shorthand to initialize the properties.
class person {
  name;
  age;
  address;
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
console.log(
  "Initializing the person class",
  new person("vamsi", 25, "apt 2007")
);
// Convert a regular function into an arrow function and use it to filter an array of numbers, returning only the even numbers.
const oddNumberFilter = (array) => {
  return array.filter((value) => {
    if (value % 2 === 0) return true;
    return false;
  });
};
console.log(
  "Printing even numbers array after filtering",
  oddNumberFilter([1, 2, 3, 4, 5, 6])
);
// Use destructuring assignment to extract the first and last name from a given object and display them separately.
const fullName = ["Vamsi", "Sai", "Poludasu"];
const [firstName, , lastName] = fullName;
console.log(
  "Printing firstName and lastName sing destructing assignment",
  firstName,
  lastName
);
// Create a module that exports a function to capitalize the first letter of a string using default export.
// Use the import and export statements to split your code into multiple files and import a function from one file into another.
const myString2 = "my first will be capitalized";
console.log(
  "My first letter is set to capital using a module",
  capitalizeFirstLetter(myString2)
);

// Implement a Promise-based function that fetches data from an API and handles both success and error cases using async/await.

// Use template literals to create a formatted string that includes variables and line breaks.
const name = "vamsi";
const age = 25;
const address = "apt 2007";

const myString3 = `
Name: ${name}
Age: ${age}
Address: ${address}
`;

console.log(myString3);

// Write a generator function that yields the Fibonacci sequence up to a given limit.
function fibanocciGenerator(limit) {
  let previous = 0;
  let current = 1;
  let next;
  let fibanocciSeries = [0, 1];
  for (let i = 2; i < limit; i++) {
    next = previous + current;
    if (next > limit) {
      return fibanocciSeries;
    }
    fibanocciSeries.push(next);
    previous = current;
    current = next;
  }
  return fibanocciSeries;
}
console.log(fibanocciGenerator(10));
// Use the let keyword to declare a variable inside a loop and observe the difference in behavior compared to var.
for (let k = 0; k < 5; k++) {
  setTimeout(() => {
    console.log("Using let:", k);
  }, 1000);
}

for (var l = 0; l < 5; l++) {
  setTimeout(() => {
    console.log("Using var:", l);
  }, 1000);
}
console.log(
  "Since var is used the loop calue is set to 5 from the initial iteration only because of scope diffrence"
);
// Implement a class with a static method that accepts an array of numbers and returns the sum of all elements.
class sumCalculator {
  static sum(numberArray) {
    let sum = 0;
    numberArray.forEach((value) => {
      sum += value;
    });
    return sum;
  }
}
console.log(
  "Printing the sum of numbers using a static method inside a class",
  sumCalculator.sum([1, 2, 3, 4])
);
// Use the includes method to check if an array contains a specific value, and return a boolean result.
const myArray1 = [1, 2, 3, 4, 5, 6];
console.log("Checking if my array has 5 in it", myArray1.includes(5));
// Convert a regular object into an iterable by implementing the iterator protocol.
const myObject1 = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]: function* () {
    yield* this.data;
  },
};

console.log("printing the number of an array using the iterator protocol");
for (const value of myObject1) {
  console.log(value);
}

// Create a higher-order function that takes a callback function as an argument and invokes it after a specific delay using setTimeout.
function delayedCallback(callback, delay) {
  setTimeout(callback, delay);
}
function printQuestion() {
  console.log(
    "I am being printed using a higher order function after 1 second of execution set using timeout"
  );
}
delayedCallback(printQuestion, 1000);
