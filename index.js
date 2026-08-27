const express = require('express');
const app = express();
const PORT = 8000;



const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// Route using asyncHandler
app.get('/data', asyncHandler(async (req, res)=> {
    const data = await fetchFromDataBase(); 
    res.json(data);
}));

// 404 handler - place BEFORE error handler
app.use((req, res, next) => {
    res.status(404).json({
        error: `Route ${req.method} ${req.url} not found`,
    });
});

// Global error-handling middleware (4 params !)
app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).json({
        error: err.message || 'Internal Server Error',
    });
});


// 1. Added unique IDs to your students
const students = [
    {id: 1, name : "john", age : 20},
    {id: 2, name : "jane", age : 22},
    {id: 3, name : "bob", age : 21},
    {id: 4, name : "alice", age : 19},
];

// Base route
app.get("/" , (request , response)=> {
    response.send("Welcome! Go to /students or /students/1");
});

// Get all students
app.get("/students" , (request , response)=> {
    response.status(200).json({
        message : "List of students",
        data : students
    })
});

// 2. NEW DYNAMIC ROUTE: The ':id' makes this path dynamic
app.get("/students/:id", (request, response) => {
    // Read the ID from the URL (Note: URL parameters are always strings, so we convert it to a number)
    const studentId = parseInt(request.params.id); 
    
    // Find the student matching that ID
    const student = students.find(s => s.id === studentId);

    // If student exists, send it back. If not, send a 404 error.
    if (student) {
        response.status(200).json({
            message: "Student found",
            data: student
        });
    } else {
        response.status(404).json({
            message: `Student with ID ${studentId} not found`
        });
    }
});





app.listen(PORT, () => {
    console.log(`Server is successfully running at http://localhost:${PORT}`);
});
