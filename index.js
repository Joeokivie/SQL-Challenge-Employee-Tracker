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
    console.table(department[0])
}
async function viewalljobtitles() {
    const employees = await db.promise().query("SELECT * FROM employees_db.job_titles;")
    console.table(jobtitles[0])
}


async function viewallemployees() {
    const employees = await db.promise().query("SELECT * FROM employees_db.employees;")
    console.table(employees[0])
}



async function init() {
    const response = await inquirer.prompt(
        [{
            type: "list",
            message: "Welcome to employee tracker please select what you would like to do",
            choices: ["view all department", "view all job titles", "view all employees",],
            name: "menu",

        }]
    )
    if (response.menu === "view all department") {
        viewalldepartment()
        
    }
    if (response.menu === "view all job titles") {
        viewalljobtitles()
        
    }
}

async function init() {
    const response = await inquirer.prompt(
        [{
            type: "list",
            message: "Welcome to employee tracker please select what you would like to do",
            choices: ["view all department", "view all job titles", "view all employees", "hi"],
            name: "menu",

        }]
    )
    if (response.menu === "view all department") {
        viewalldepartment()
        
    } else if (response.menu === "view all job titles") {
        viewalljobtitles()
        
    } else if (response.menu === "view all employees") {
        viewallemployees();
    }
}
init()