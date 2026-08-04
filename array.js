//higher order array methods
// we have >>>  map, filter, reduce, forEach, find, findIndex, some, every

// Map Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubleNumbers = numbers.map((num)=> num * 2);

console.log(doubleNumbers); // this gives result of the array numbers doubled
const marketList = ["rice", "beans", "garri", "yam", "plantain"]
const addedPrefix = marketList.map((item)=> "I will buy: " + item)
console.log(addedPrefix);

// Filter Method

const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers); // prints even numbers only

const complexion = ["dark", "fair", "caramel", "dark", "fair"]
const darkCompletion = complexion.filter((item) => item === "dark")
console.log(darkCompletion);
