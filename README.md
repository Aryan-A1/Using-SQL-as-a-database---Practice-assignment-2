### Problem Statement


Create a Simple Express Server with MySQL Connection Using Environment Variables.

### Project Initialization:

Create a new Node.js project using npm init.

### Environment Configuration:

Create a .env file in the root of your project.
Define environment variables for your MySQL connection (e.g., DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) and a port number (PORT) for the Express server.

### Installing Dependencies:

Install the necessary packages: express, mysql2, and dotenv.

### Creating the Server File:

Create a single file named server.js that will contain both your Express server code and the MySQL connection code.
Loading Environment Variables:

In server.js, load your environment variables using the dotenv package at the very beginning of the file.
Setting Up the Express Server:

Configure and initialize the Express server in server.js. Ensure that the server listens on the port specified in your .env file.

### Establishing the MySQL Connection:

Within the same server.js file, use the mysql2 package to create a connection to your MySQL database.
Use the environment variables for the connection details.
Implement proper error handling to log an error if the connection fails and confirm success when it connects.
