console.log("task 1");
console.log("task 2");
console.log("task 3");
console.log("task 4");

//setTimeout , setInterval , setImmediate

setTimeout(()=>{
    console.log("This is set interval function");
} , 2000);

setInterval(()=>{
    console.log("This is set interval function");
} , 2000);

setImmediate(()=>{
    console.log("This is set immediate function");
});

//async/await function

