const express = require('express');
const mysql = require('mysql2');

// Environment variables for database configuration
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
const DB_NAME = process.env.DB_NAME || 'workspace_db';
const PORT = process.env.PORT || 3001;

const app = express();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the workspace_db database.');
});

// Here you can set up your routes and middleware
// Example: app.get('/', (req, res) => res.send('Hello World!'));

// Start the Express server
app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});

module.exports = connection;