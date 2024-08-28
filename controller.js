const Students = require('./model'); // Import the Mongoose model for Students collection

// Function to handle fetching all students
const getStudents = (req, res, next) => {
    // Use Mongoose's `find` method to retrieve all documents in the Students collection
    Students.find()
        .then(response => {
            res.json({ response }); // Send the retrieved students data as a JSON response
        })
        .catch(error => {
            res.json({ error }); // Handle any errors that occur during the database query
        });
};

// Function to handle creating a new student
const createStudent = (req, res, next) => {
    // Create a new instance of the Students model with the data received in the request body
    const student = new Students({
        id: req.body.id, // Assign the student ID
        name: req.body.name, // Assign the student name
        grade: req.body.grade, // Assign the student grade
    });

    // Save the new student document to the database
    student.save()
        .then(response => {
            res.json({ response }); // Send the result of the save operation as a JSON response
        })
        .catch(error => {
            res.json({ error }); // Handle any errors that occur during the save operation
        });
};

// Function to handle updating an existing student's details
const updateStudent = (req, res, next) => {
    const { id, name, grade } = req.body; // Destructure the ID, name, and grade from the request body

    // Use Mongoose's `updateOne` method to update the student document with the matching ID
    Students.updateOne({ id: id }, { $set: { name: name, grade: grade } })
        .then(response => {
            res.json({ response }); // Send the result of the update operation as a JSON response
        })
        .catch(error => {
            res.json({ error }); // Handle any errors that occur during the update operation
        });
};

// Function to handle deleting a student
const deleteStudent = (req, res, next) => {
    const { id } = req.body; // Destructure the ID from the request body

    // Use Mongoose's `deleteOne` method to remove the student document with the matching ID
    Students.deleteOne({ id: id })
        .then(response => {
            res.json({ response }); // Send the result of the delete operation as a JSON response
        })
        .catch(error => {
            res.json({ error }); // Handle any errors that occur during the delete operation
        });
};

// Export the functions for use in other parts of the application
exports.getStudents = getStudents;
exports.createStudent = createStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
