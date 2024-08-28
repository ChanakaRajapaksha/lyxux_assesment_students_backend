const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB

const Schema = mongoose.Schema; // Define a Schema constructor from Mongoose

// Define a new schema for the Students collection
const studentSchema = new Schema({
    id: Number,   // Define a field for the student ID (assumed to be a unique number for each student)
    name: String, // Define a field for the student's name (assumed to be a string)
    grade: String, // Define a field for the student's grade (assumed to be a string representing their academic grade)
});

// Create a model based on the schema
const Students = mongoose.model('Students', studentSchema); // This model represents the Students collection in MongoDB

// Export the model for use in other parts of the application
module.exports = Students;
