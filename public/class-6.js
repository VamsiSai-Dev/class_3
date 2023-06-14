//Array Methods:

// 1) Write a function that uses the push method to add an element to the end of an array.
let myArray = [1, 2, 3, 4];
function pushElement(element, array) {
  array.push(element);
  return array;
}
console.log("Pushing element 5 to myArray and elements in myArray are");
let pushedArray = pushElement(5, myArray);
console.log(pushedArray);

// 2) Create a function that uses the pop method to remove the last element from an array.
function popElement(array) {
  array.pop();
  return array;
}
let myArray2 = [5, 4, 3, 2, 1];
console.log("popping last element  from myArray and myArray is equal to");
let poppedArray = popElement(myArray2);
console.log(poppedArray);

// 3) Implement a function that uses the concat method to combine two arrays into a single array.
function concatArray(array1, array2) {
  let concattedArray = array1.concat(array2);
  return concattedArray;
}
console.log(
  "Concatinating pushedArray in question1 and popped Array in question 2"
);
let concattedArray = concatArray(pushedArray, poppedArray);
console.log(concattedArray);

// 4) Write a function that uses the indexOf method to find the index of a specific element in an array.
function findIndexOf(element, array) {
  return array.indexOf(element);
}
console.log("Finding the index of 2 in the popped Array");
let indexOf2 = findIndexOf(2, poppedArray);
console.log(indexOf2);

// 5)  Create a function that uses the slice method to extract a portion of an array.
function sliceArray(array, start, end) {
  return array.slice(start, end);
}
let myArray3 = [6, 7, 8, 9];
console.log("Slicing myArray3 from index 1 to 2");
let slicedArray = sliceArray(myArray3, 1, 3);
console.log(slicedArray);

// 6) Write a function that uses the toUpperCase method to convert a string to uppercase.
function convertToUpperCase(stringValue) {
  return stringValue.toUpperCase();
}
let myString1 = "Vamsi";
console.log("Converting Vamsi to upper case");
let upperCaseString = convertToUpperCase(myString1);
console.log(upperCaseString);

// 7) Implement a function that uses the toLowerCase method to convert a string to lowercase.
function convertToLowerCase(stringValue) {
  return stringValue.toLowerCase();
}
let myString2 = "SAI";
console.log("Converting SAI to upper case");
let lowerCaseString = convertToLowerCase(myString2);
console.log(lowerCaseString);
// 8) Create a function that uses the split method to split a string into an array of substrings.
function splitEntireStringToArray(stringValue) {
  return stringValue.split(" ");
}
let myString3 = "Vamsi Sai";
console.log("Splitting the string Vamsi Sai to an array of substrings");
let splitStringArray = splitEntireStringToArray(myString3);
console.log(splitStringArray);
// 9) Write a function that uses the charAt method to get the character at a specific index in a string.
function findCharAt(stringValue, index) {
  return stringValue.charAt(index);
}
let myString4 = "Vamsi Sai Poludasu";
console.log("Finding the char At 11 in Vamsi Sai Poludasu");
let chatAt11 = findCharAt(myString4, 11);
console.log(chatAt11);
// 10) Implement a function that uses the substring method to extract a portion of a string.
function subStringOf(stringValue, start, end) {
  return stringValue.substring(start, end);
}
let myString5 = "Hello I am codded in JavaScript";
console.log("Finding substring from index 10 to 15");
let subStrofmystr5 = subStringOf(myString5, 10, 15);
console.log(subStrofmystr5);

// Array Iterations:
// 11) Implement a function that uses the map method to double each element in an array.
let myArray4 = [1, 2, 3, 4];
function mapToDoubleElement(array) {
  return array.map(function doubler(value, index, array) {
    return value * 2;
  });
}
console.log("Doubling the elements of the array");
console.log(mapToDoubleElement(myArray4));
// 12) Write a function that uses the filter method to remove all even numbers from an array.
let myArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getOddNumberByFiltering(array) {
  return array.filter(function filterOutEven(value, index, array) {
    if (value % 2 !== 0) return true;
    else return false;
  });
}
console.log(
  "Returning the array by removing all the even numbers of the array"
);
console.log(getOddNumberByFiltering(myArray5));
// 13) Create a function that uses the forEach method to log each element of an array to the console.
let myArray6 = [1, 2, 3, 4, 5, 6, 7];
function iterateElements(array) {
  return array.forEach(function myIterator(value, index, array) {
    console.log("Iterating Using For Each", value);
  });
}
console.log("Iterating the array using For Each");
iterateElements(myArray6);

// 14) Write a function that reverses a string without using the built-in reverse method.
let myString6 = "Hello I am reversed";
function reverseString(stringValue) {
  let reversed = "";
  for (let i = stringValue.length - 1; i >= 0; i--) {
    reversed += stringValue[i];
  }
  return reversed;
}
console.log("Reversing a string using traditional fr loop");
console.log(reverseString(myString6));
// 15) Implement a function that checks if a string is a palindrome (reads the same forward and backward).
let myString7 = "racecar";
function checkPalindrome(stringvalue) {
  stringvalue = stringvalue.toLowerCase();
  let reversedString = stringvalue.split("").reverse().join("");
  if (reversedString === stringvalue)
    console.log("The given string is a palindrome");
  else console.log("The given string is not a palindrome");
  return;
}
console.log("checking if racecar is a palindrome");
checkPalindrome(myString7);
// 16) Create a function that finds the maximum number in an array without using the built-in Math.max method.
let myArray7 = [4, 215, 16, 984, 569];
function getMaxValueOfArray(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
console.log("Finding the max of array");
console.log(getMaxValueOfArray(myArray7));
// 17) Write a function that removes duplicates from an array and returns a new array without duplicates.
let myArray8 = [1, 2, 1, 3, 4, 2, 4, 5];
function getUniqueElementsArray(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
console.log("Printing the unique Array", getUniqueElementsArray(myArray8));
// 18) Implement a function that sorts an array of numbers in ascending order without using the built-in sort method.
let myArray9 = [7, 4, 1, 8, 5, 2, 9, 6, 3];
function getSortedArray(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("Sorted Array", getSortedArray(myArray9));

// Hoisting:
// 19) Explain the concept of hoisting and provide an example.
// 20) Write a code snippet that demonstrates hoisting in JavaScript.
console.log(hoistedValue);
var hoistedValue = 5;
console.log(hoistedValue);
// 21) Describe the difference between function hoisting and variable hoisting.
