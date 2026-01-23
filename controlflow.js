// // Control Flow Statements in JavaScript
// // If-Else Statement (if, if else, if else-if else)
// // if (condition) {} --> condition true hoy to {} code run
// if (1213) {
// console.log(true);
// }
// if (1513) {
// console.log(true);
// } // condition is false that why if statement not run
// if (112) {
// console.log("number");
// }
// if (10) {
// console.log("number");
// }

// if-else if-else Statement
if (condition) {
} else if (condition) {
} else {
}

let loggedin = false;
let admin = false;
if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}

// Nested if-else Statement
let loggedIn = true;
let adminUser = false;

if (loggedIn) {
  if (adminUser) {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
} else {
  console.log("Please log in");
}

// Switch Statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Switch case Statement
switch (
  "BOGO" // value-> Case value sathe match karshe ane code run thase
) {
  case "First50":
    console.log("50% Off on First Order");
    break;
  case "BOGO":
    console.log("Buy one get one");
    break;
  case "BlackFriday":
    console.log("It's Black Friday Sale - get at Rs. 50");
    break;
  default:
    console.log("Offer Not Vaild");
}

function scorel (value) {
}
if (value > 90) return "Value is more than 90";
else if (value < 80) return "Value is less than 80";
else if (value < 70) return "Value is less than 70";
else if (value < 60) return "Value is less than 60";
else return "Value is less than 60";

console.log(scorel(95));
console.log(scorel(75));
console.log(scorel(65));
console.log(scorel(55));    

switch ("A") {
    case "A":
        console.log("Grade A");
        break;
    case "B":
        console.log("Grade B");
        break;
    case "C":
        console.log("Grade C");
        break;
    default:
        console.log("Invalid Grade");
}