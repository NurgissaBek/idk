//1st and 2nd task
let firstName = prompt("Enter your first names");
let lastName = prompt("Enter your last name");
let userAge = prompt("Enter your age");
let userHobby = prompt("Enter your hobby")
let hasDriverLicense = prompt("Do you have a driver's license? (yes/no)")
let isDrive = userAge >= 18 && hasDriverLicense=="yes";
if (isDrive){
  console.log("You are eligible to drive");
}
else{
  console.log("You are not eligible to drive");
}
console.log(`Hello! My name is ${firstName} ${lastName} and I am ${userAge} years old.`);

//3rd task
let number = prompt("Enter a number:");
let isEven = number % 2 == 0;
let isOdd = number % 2 != 0;
let isMultipleOf5 = number % 5 == 0;
let isGreaterThan10 = number > 10;

console.log(`You entered: ${number}`);
console.log(`Is the number even? ${isEven}`);
console.log(`Is the number odd? ${isOdd}`);
console.log(`Is the number a multiple of 5? ${isMultipleOf5}`);
console.log(`Is the number greater than 10? ${isGreaterThan10}`);

if (isOdd && isMultipleOf5) {
  console.log("The number is special!");
}

//4th task
let numberInput = prompt("Enter a number:");
let stringInput = prompt("Enter a string:");
let booleanInput = prompt("Enter a boolean (true/false):");

console.log("Data type of number input:", typeof numberInput);
console.log("Data type of string input:", typeof stringInput);
console.log("Data type of boolean input:", typeof booleanInput);

//5th task
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");
let area = length * width;

console.log(`Initial area: ${area}`);

let update = prompt("Do you want to update the length or width?");
if (update == "length") {
  length = prompt("Enter new length:");
} else if (update == "width") {
  width = prompt("Enter new width:");
}

area = length * width;
console.log(`Updated area: ${area}`);

//6 task
let numColors = prompt("How many colors do you want to input?");
let colors = [];

for (let i = 0; i < numColors; i++) {
  let color = prompt(`Enter color ${i + 1}:`);
  colors.push(color);
}

console.log(`First Color: ${colors[0]}`);
console.log(`Last Color: ${colors[colors.length - 1]}`);

//7 task
let userInfo = {
  name: firstName + lastName,
  age: userAge,
  hobby: userHobby
};
console.log(userInfo);

//8 task
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

let isGreaterThan = firstNumber > secondNumber;
let isLessThan = firstNumber < secondNumber;
let isEqual = firstNumber == secondNumber;

console.log("First number is greater than second number:", isGreaterThan);
console.log("First number is less than second number:", isLessThan);
console.log("First number is equal to second number:", isEqual);

//9
let fruits = [];
let numFruits = prompt("How many fruits do you want to input?");

for (let i = 0; i < numFruits; i++) {
  let fruit = prompt(`Enter fruit ${i + 1}:`);
  fruits.push(fruit);
}

fruits.pop();
let newFruit = prompt("Enter a new fruit to add at the beginning:");
fruits.unshift(newFruit);

console.log(`Updated Fruit List: [${fruits.join(', ')}]`);

//10
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase();

num1 = Number(num1);
num2 = Number(num2);
let result;

if (operation == "add") {
  result = num1 + num2;
} else if (operation == "subtract") {
  result = num1 - num2;
} else if (operation == "multiply") {
  result = num1 * num2;
} else if (operation == "divide") {
  if (num2 == 0) {
    console.log("Error: Cannot divide by zero.");
  } else {
    result = num1 / num2;
  }
} else {
  console.log("Invalid operation.");
}

if (result != undefined) {
  console.log(`The result is: ${result}`);
}









