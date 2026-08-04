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