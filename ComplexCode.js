/* Filename: ComplexCode.js
   Description: This code represents a complex JavaScript program that involves various concepts and functionality.
*/

// Class to represent a Person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to check if a number is prime or not
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering even numbers from the array using the filter() method
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Even numbers:", evenNumbers);

// Creating an instance of the Person class
const person = new Person("John", 25);

person.sayHello();

// Calculating factorial of 5
const factorialOf5 = factorial(5);

console.log("Factorial of 5:", factorialOf5);

// Checking if a number is prime or not
const primeCheckNumber = 17;

if (isPrime(primeCheckNumber)) {
  console.log(`${primeCheckNumber} is a prime number.`);
} else {
  console.log(`${primeCheckNumber} is not a prime number.`);
}

// Generate a Fibonacci sequence
function fibonacci(n) {
  const sequence = [];
  
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      sequence.push(i);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

const fibonacciSequence = fibonacci(10);

console.log("Fibonacci Sequence:", fibonacciSequence);

// Class to represent a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

// Creating a rectangle instance and calculating its area
const rectangle = new Rectangle(5, 10);

console.log("Area of the rectangle:", rectangle.area);

// Generate a random number between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumInRange = getRandomNumber(1, 10);

console.log("Random number between 1 and 10:", randomNumInRange);

// Sorting an array of strings in ascending order
const fruits = ["Apple", "Banana", "Orange", "Grapes"];

console.log("Sorted fruits in ascending order:", fruits.sort());

// Fetching data from an API using async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
  
    console.log("Fetched data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

const apiUrl = "https://api.example.com/data";

fetchData(apiUrl);