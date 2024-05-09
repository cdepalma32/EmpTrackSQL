const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Create a connection to the MySQL database
const databaseConfig = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'workspace_db'
},

);

// Create and export the database connection
const connection = mysql.createConnection(databaseConfig);

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the workspace_db database.');
});

// Set up your routes and middleware here

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = connection;