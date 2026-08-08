try {
    // Code that might fail goes here
    let result = 10 / 2
    console.log(result);
    undefinedFunction(); // This will cause an error
    console.log("This line will not run");
} catch (error) {
    // This runs only if something goes wrong
    console.log("An error occurred: " + error.message + " " + error.name);
}

console.log("The program continues here.");


function loadUserData(userId) {
    console.log("Starting to load data...");
}
try {
    if (userId <= 0){
        throw newError("User ID must be greater than 0")
    }
    console.log("Data loaded for user: " + userId);
}catch(error){
    console.log("Failed: " + error.message);
}finally {
    console.log("Loading complete. Closing connection.");
}

loadUserData(5);  // Data loaded for user: 5 --> Loading complete.
loadUserData(-1); // Failed: User ID must be... --> Loading complete.

function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty!");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered: " + name + ", Age: " + age);
    } catch (error) {
        console.log("Registration failed: " + error.message);
    }
}

registerStudent("Bola Okafor", 22); // Student registered: Bola Okafor, Age: 22
registerStudent("", 22);            // Registration failed: Name cannot be empty!
registerStudent("Kemi", 12);        // Registration failed: Age must be between 16 and 60.