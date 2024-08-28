const express = require('express'); // Import Express to create and manage routes
const router = express.Router(); // Create a new router object using Express

const controller = require('./controller'); // Import the controller to handle the logic for each route

// Define a route for fetching all students
router.get('/students', controller.getStudents);
// This route listens for GET requests at the '/students' endpoint and calls the `getStudents` method from the controller.
// The assumption is that this method will retrieve and return a list of all student records from the database.

// Define a route for creating a new student
router.post('/createstudent', controller.createStudent);
// This route listens for POST requests at the '/createstudent' endpoint and calls the `createStudent` method from the controller.
// The assumption is that the request body will contain the necessary data (id, name, grade) to create a new student record in the database.

// Define a route for updating an existing student
router.put('/updatestudent', controller.updateStudent);
// This route listens for PUT requests at the '/updatestudent' endpoint and calls the `updateStudent` method from the controller.
// The assumption is that the request body will contain the student's id along with the updated name and grade to modify an existing record in the database.

// Define a route for deleting a student
router.delete('/deletestudent', controller.deleteStudent);
// This route listens for DELETE requests at the '/deletestudent' endpoint and calls the `deleteStudent` method from the controller.
// The assumption is that the request body will contain the student's id, which is used to identify and remove the corresponding record from the database.

module.exports = router; // Export the router so it can be used in the main Express app
