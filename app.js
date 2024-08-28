const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import CORS middleware to enable cross-origin requests

const controller = require('./controller'); // Import the controller which contains business logic for handling requests

const app = express(); // Create an instance of an Express application

// Middleware setup
app.use(cors()); // Enable CORS for all routes to allow cross-origin requests
app.use(
    express.urlencoded({
        extended: true, // Allow for rich objects and arrays to be encoded into URL-encoded format
    })
);
app.use(express.json()); // Enable parsing of JSON bodies in incoming requests

// Route to handle GET requests for fetching students
app.get('/students', (req, res) => {
    // Call the getStudents method from the controller and send the result in the response
    controller.getStudents((req, res, next) => {
        res.send(); // Send the response (implementation assumes data is handled in the controller)
    });
});

// Route to handle POST requests for creating a new student
app.post('/createstudent', (req, res) => {
    // Call the createStudent method from the controller, passing the request body
    controller.createStudent(req.body, (callback) => {
        res.send(callback); // Send the result of the operation back to the client
    });
});

// Route to handle PUT requests for updating an existing student
app.put('/updatestudent', (req, res) => {
    // Call the updateStudent method from the controller, passing the request body
    controller.updateStudent(req.body, (callback) => {
        res.send(callback); // Send the result of the operation back to the client
    });
});

// Route to handle DELETE requests for deleting a student
app.delete('/deletestudent', (req, res) => {
    // Call the deleteStudent method from the controller, passing the request body
    controller.deleteStudent(req.body, (callback) => {
        res.send(callback); // Send the result of the operation back to the client
    });
});

module.exports = app; // Export the Express application instance
