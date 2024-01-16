# Description
A SQL Challenge: Employee Tracker is a task or project that involves designing and implementing a relational database to manage employee-related information within an organization. Participants are tasked with creating SQL queries, tables, and relationships to efficiently store, retrieve, and manipulate data. Here's an outline of what the challenge might entail. Database Schema Design participants are required to design the database schema, defining tables for employees, departments, roles, and any other relevant entities. Consideration should be given to relationships between tables, primary and foreign keys, and normalization principles. Table Creation: Write SQL statements to create the necessary tables based on the designed schema. Ensure that data types, constraints, and relationships are accurately implemented. Data Population can populate the tables with sample data that represents a realistic scenario within an organization. Include a variety of data to test different aspects of the database design. Query Challenges: Create SQL queries to retrieve specific information from the database. This may include: Retrieving a list of all employees in a particular department. Finding the total number of employees. Identifying employees with the highest salary. Retrieving a list of employees and their roles.

# Installation 
Setting up your database on a MySQL database server is the first step. We utilized MySQL Workbench for the application we developed. Once the code in the schema.sql file has been loaded into your MySQL database server, you can start your database. Alternatively, you can execute the code in seed.sql once more to add some filler data to your database. Next, conduct a npm install in your terminal to download the npm packages required to start the application while still in the directory containing the app index.js.Run node index.js in your terminal while you're still in the directory containing the app index.js to launch it.

# Table of content 
Installation, Usage, Credits, License, Features, 


# Usage
Seven options will appear on the screen once the software launches: "View all department," "View all job titles," "View all employees," "Add a department," "Add all employees," and "Update an employee role."

# credits
We used Node.js for this project and the npm packages:

MySQL2: 3.6.2 Dotenv: 16.3.1 Inquirer: 8.2.4

# Features
The application will repeatedly ask the user if they have any more actions they would like to do with the database after they have completed their initial intended action. I constructed a function that transforms an array of objects with identical attributes into an array of tables that are displayed in the terminal. 

