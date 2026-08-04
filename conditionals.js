//if/else

let age = "40";

if(age >= 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote");
};

//

let gender = "non-binary";

if(gender === "female"){
    console.log("You re a female, use the lady's restroom");
} else if(gender === "non-binary"){
    console.log("use the non-binary room");
} else {
    console.log("You are a male, use the male's restroom");
};

//for loop

for(let i=0; i<10; i++){
    console.log(i); 
}

let scores = [20, 12, 25, 15];
for(let newScore = 0; newScore < scores.length; newScore++){
    console.log(scores[newScore] + 20);
} // adds 20 to the score array


//While loop
let loginAttempts = 0;
while(loginAttempts < 3){
    console.log(`attempt number ${loginAttempts}`);
    loginAttempts++
}



