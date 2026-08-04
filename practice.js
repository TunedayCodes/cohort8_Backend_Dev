//SECTION A - DATA TYPES

let name ="Tunde Fadipe";
let age = 30;
let studentStatus = true;


console.log(name, age, studentStatus);
console.log(typeof name);
console.log(typeof age);
console.log(typeof studentStatus);

let shoppingList = ["Rice", "Beans", "Potatoes", "Yams"];
console.log(shoppingList);
console.log(typeof shoppingList);


//SECTION B - ARITHMETIC OPERATORS

let num1 = 20;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(17 % 5);

var price = 1500;
var discount = 200;

let finalPrice = price - discount;
console.log(finalPrice);

//SECTION C - COMPARISON OPERATORS 

let a = 10;
let b = "10";

console.log(a == b); //with this "==" first value data type overides the second value data type
console.log(a === b); //with this "===" both values must be the same data type to portray equality

let score = 75;
console.log(score >= 50);

//SECTION D - LOGICAL OPERATORS

let hasTicket = true;
let hasId = false;
permittedPerson = hasTicket && hasId;

console.log(permittedPerson);

permittedPerson = hasTicket || hasId; //to check if they can enter with just one
console.log(permittedPerson); 

//SECTION E - MINI PROJECT

let password = "12345";
let correctPassword = "1234";

console.log(password === correctPassword);

let budget = 5000;
let itemPrice = 1200;

itemAffordable = (budget >= itemPrice) && (budget > 0); 
console.log(itemAffordable)