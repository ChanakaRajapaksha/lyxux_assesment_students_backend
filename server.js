const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import CORS middleware for enabling cross-origin requests
const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection and modeling

const router = require('./router'); // Import the router for handling API routes

const app = express(); // Create an instance of an Express application

// Server configuration
const port = 3001; // Define the port on which the server will listen
const host = 'localhost'; // Define the host for the server

// MongoDB connection URI
const uri = 'mongodb+srv://rcp_rajapaksha:0HXbbjx1an6SIzJu@cluster0.jmylfwx.mongodb.net/Student?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors()); // Enable CORS for all routes to allow cross-origin requests
app.use(express.json()); // Enable parsing of JSON bodies in incoming requests

// Start the server and listen on the defined port and host
const server = app.listen(port, host, () => {
    console.log(`Server listening on port ${server.address().port}`);
});

// Asynchronous function to connect to MongoDB using Mongoose
const connect = async () => {
    try {
        await mongoose.connect(uri); // Connect to the MongoDB database using the provided URI
        console.log('Connected to MongoDB'); // Log success message on successful connection
    } catch (error) {
        console.error(error); // Log any errors that occur during the connection attempt
    }
};

// Call the connect function to establish the MongoDB connection
connect();

// Use the imported router to handle all API routes under the /api path
app.use('/api', router);
