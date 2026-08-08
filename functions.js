//functions without parameters

function greeting (){
    console.log("hello world");
}

greeting();

function add (){
    let x = 4;
    let y = 6;
    return x + y
}
console.log(add());

//functions with parameters

function welcome(name){
    console.log(`welcome to class MR/MRS/MISS ${name}`);
}

welcome('TeeJay');

function addition (x , y){
    return x + y
}
console.log(addition(10 , 20));


function ageCheck(age) {
    if (age <= 18) {
        return "please GET OUT ...YOU ARE UNDERAGED"
    } else {
        return "Buy one bottle for me Egbon!!"
    }
}

let estherAge = ageCheck(30)
// console.log(estherAge)

//write a function that checks if the lucky 4 is equal to 4
/**if it is equal to 4 , return "CONGRATULATIONS" ,
 *  else return  "TRY AGAIN" */


//scope
//global scope
let score = 75;
function gradingSystem() {
    if (score >= 50) {
        return "PASSED!"
    } else {
        return "FAILED!!!!!!"
    }
}
function deliveryFee() {
    let fee = 5000
    return fee
}

/*write a function that grades a student score , if the score is 
1: 70-100 display "A"
2: 50-69 display "B"
3: 0-49 display "F"
*/

//ARROW FUNCTIONS
const minus = (num) =>{
    return num - 50
}
let result = minus(75)