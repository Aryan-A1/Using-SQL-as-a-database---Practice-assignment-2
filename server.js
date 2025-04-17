require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Basic route
app.get("/", (req, res) => {
  res.send("Express Server with MySQL Connection is running!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle process termination
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});
