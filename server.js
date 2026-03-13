// Inside server.js, write the code for your Express server. It must do the following:
// Import the express library.
// Import the built-in path module, which will help you create correct file paths.
const express = require("express");
const path = require("path");

const greet = require("./greet");
const contact = require("./contact");

// Create an instance of an Express application.
const app = express();

// Define a port to run the server on (e.g., 3000).
const PORT = 3000;

// Create a route handler for GET requests to the root URL (/). 
// When this route is requested, it should send the index.html file from your public directory.
app.get('/greeting', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Create another route handler for GET requests to /contact. 
// This should send the contact.html file.
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// Start the server and have it listen on your chosen port. 
// When it starts, it should log a message to the console, like Server is running on port 3000.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Hint: To send a file, you’ll need to provide an absolute path. 
// Use path.join(__dirname, 'public/index.html') to create a reliable path to your HTML files.