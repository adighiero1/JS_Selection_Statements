console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//Excercise 1
let favoriteNumber = 5;

let guess = prompt("What is your guess?");

if (guess > favoriteNumber) {
  console.log("your guess is too too large");
} else if (guess < favoriteNumber) {
  console.log("your guess is too low");
} else {
  console.log("Congratulations!");
}
//Excercise 2

let birthMonth = prompt("What is your birth month?");

switch (birthMonth) {
  case "January":
    console.log("winter");
    break;
  case "February":
    console.log("winter");
    break;
  case "March":
    console.log("winter");
    break;
  case "April":
    console.log("spring");
    break;
  case "May":
    console.log("spring");
    break;
  case "June":
    console.log("spring");
    break;
  case "July":
    console.log("summer");
    break;
  case "August":
    console.log("summer");
    break;
  case "September":
    console.log("summer");
    break;
  case "October":
    console.log("fall");
    break;
  case "November":
    console.log("fall");
    break;
  case "December":
    console.log("winter");
    break;
  default:
    console.log("not a month");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

//excercise 3

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "Tank top";
    break;
  case "03":
    type = "Tank top";
    break;
  case "04":
    type = "Tank top";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;

  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
