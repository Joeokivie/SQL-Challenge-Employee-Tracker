const inquirer = require("inquirer");
const mysql = require("mysql2")

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Jayden28!',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);
async function viewalldepartment() {
    const employees = await db.promise().query("SELECT * FROM employees_db.departments;")
    console.table(employees[0])
    init()
}
async function viewalljobtitles() {
    const employees = await db.promise().query("SELECT * FROM employees_db.job_titles;")
    console.table(employees[0])

    init()
}


async function viewallemployees() {
    const employees = await db.promise().query("SELECT * FROM employees_db.employees;")
    console.table(employees[0])
    init()
}

async function addalldepartment() {
    const response = await inquirer.prompt(
        [{
            type: "input",
            message: "pick a department you would like to add",
            name: "department",

        }]
    )
       const employees = await db.promise().query(`INSERT INTO departments (department_name) VALUES('${response.department}')`)
    console.log(response)
    init()
}
async function addallemployees() {
    const response = await inquirer.prompt(
        {
            type: 'input', 
            name: 'firstName',
            message: 'Enter Employee First Name:'

        }, 
        {
            type: 'input', 
            name: 'lastName',
            message: 'Enter Employee Last Name:'
 
        },
            
        



    )
    const employees = await db.promise().query(`
    INSERT INTO employees (first_name, last_name, job_id, manager_id)
    VALUES ('${response.first_name}', '${response.last_name}', ${response.job_id}, ${response.manager_id})
  `);
    console.log(response)
    init()
}

async function init() {
    const response = await inquirer.prompt(
        [{
            type: "list",
            message: "Welcome to employee tracker please select what you would like to do",
            choices: ["hi", "view all department", "view all job titles", "view all employees", "add department", "add all employees" ],
            name: "menu",

        }]
    )
    if (response.menu === "view all department") {
        viewalldepartment()

    } else if (response.menu === "view all job titles") {
        viewalljobtitles()

    } else if (response.menu === "view all employees") {
        viewallemployees();


    } else if (response.menu === "add department") {
        addalldepartment();

    } else if (response.menu === "add all employees") {
        addallemployees();

        }
     


     
      
      
           
      
    
}



init()