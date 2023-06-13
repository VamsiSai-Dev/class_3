// Assignment: Declare a function isEven that takes a number num and returns true if the number is even, and false otherwise. What is the result of isEven(7)?
function isEven(num) {
  if (num % 2 === 0) return true;
  else return false;
}
console.log("Is 7 even", isEven(7));

// 2 Assignment: Declare an array of objects students with properties name and age for each student. Loop through the array and print the name of each student.
let students = [
  { name: "Vamsi", age: 25 },
  { name: "Adithya", age: 26 },
  { name: "Shanmukh", age: 25 },
];
for (let i = 0; i < students.length; i++) {
  console.log("looping the array os students", students[i]);
}

// 3.Assignment: Declare an array of objects users with properties name and email for each user. Search through the array and find the email of the user with the name "John".
let users = [
  { name: "Vamsi", email: "vamsi@gmail.com" },
  { name: "Aditya", email: "aditya@gmail.com" },
  { name: "john", email: "john@gmail.com" },
];
for (let i = 0; i < students.length; i++) {
  if (users[i].name === "john") {
    console.log("email of user with name john is", users[i].email);
  }
}

//4.Assignment: Create a function isPositive that takes a number num as an argument and returns true if the number is positive, and false otherwise. What is the result of isPositive(-2)?
function isPositive(num) {
  if (num > 0) return true;
  else return false;
}

console.log("is -2 isPositive", isPositive(-2));

//5. Assignment: Declare a variable grade and assign it the value 85. Write an if-else statement that prints "Pass" if the grade is greater than or equal to 60, and "Fail" otherwise. What is the output?
var grade = 85;
if (grade > 60) {
  console.log("Student is passed as grade is above 60");
} else {
  console.log("Student is fail as grade is below 60");
}

//6. Assignment: Declare a function isPalindrome that takes a string word and returns true if it is a palindrome (reads the same forwards and backwards), and false otherwise. What is the result of isPalindrome("racecar")?
function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }
  return true;
}
console.log("is racecar a palindrome", isPalindrome("racecar"));

//7.Assignment: Declare an array of numbers [1, 2, 3, 4, 5]. Use a loop to calculate the sum of all the numbers. What is the result?
let sumArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
  sum += sumArray[i];
}
console.log("The Sum of the array is", sum);

//8.Assignment: Declare a variable name and assign it the value "Alice". Write an if-else statement that prints "Hello, Alice!" if the name is "Alice", and "Hello, stranger!" otherwise. What is the output?
var fName = "Alice";
if (fName === "Alice") console.log("Hello Alice");
else console.log("Hello Sgtranger");

//9.Assignment: Declare an array of objects books with properties title and author for each book. Search through the array and find the author of the book with the title "The Great Gatsby".
let books = [
  { title: "ABC", Author: "Vamsi" },
  { title: "cbf", Author: "Aditya" },
  { title: "The Great Gatsby", Author: "Anniah" },
  { title: "cskd", Author: "Shanmukh" },
];
for (let i = 0; i < books.length; i++) {
  if (books[i].title === "The Great Gatsby")
    console.log("The author of the book The Great Gatsby is", books[i].Author);
}

//10.Assignment: Create a function calculateArea that takes the length and width of a rectangle as parameters and returns its area. Call the function with arguments 4 and 5. What is the result?
function calAreaRectangle(length, bredth) {
  return length * bredth;
}
console.log(
  "Srea of rectangle with length 4 and bredth 5 is",
  calAreaRectangle(4, 5)
);

//11. Write a function given parameter n, print all the prime numbers up to n.
function printPrimesUptoN(n) {
  for (let num = 2; num <= n; num++) {
    if (isNumberPrime(num)) {
      console.log(num);
    }
  }
}
function isNumberPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Printing Prime Numbers Upto 20");
printPrimesUptoN(20);
