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
}
async function viewalljobtitles() {
    const employees = await db.promise().query("SELECT * FROM employees_db.job_titles;")
    console.table(employees[0])
}


async function viewallemployees() {
    const employees = await db.promise().query("SELECT * FROM employees_db.employees;")
    console.table(employees[0])
}



// async function init() {
//     const response = await inquirer.prompt(
//         [{
//             type: "list",
//             message: "Welcome to employee tracker please select what you would like to do",
//             choices: ["view all department", "view all job titles", "view all employees",],
//             name: "menu",

//         }]
//     )
//     if (response.menu === "view all department") {
//         viewalldepartment()
        
//     }
//     if (response.menu === "view all job titles") {
//         viewalljobtitles()
        
//     }
// }

function init() {
    inquirer.prompt(
        [{
            type: "list",
            message: "Welcome to employee tracker please select what you would like to do",
            choices: ["view all department", "view all job titles", "view all employees", "hi"],
            name: "menu",

        }]).then(answers => { console.log("Answer was: ", answers.menu) }
        
    } 
    if (response.menu === "view all department") {
        viewalldepartment()
        
    } else if (response.menu === "view all job titles") {
        viewalljobtitles()
        
    } else if (response.menu === "view all employees") {
        viewallemployees();

    } else if (response.menu === "add employees") {
        viewaddemployees();
        console.log("New line executed!");
    
        
    } 
    const viewAllEmployees = () => {
        console.log("viewing all employees");
        // tutor assisted with this const query as I was stuck here
        const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dept_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN department on role.department_id=department.id LEFT JOIN employee manager on manager.id=employee.manager_id`;
        con.query(query, function (err, result) {
          if (err) throw err;
          console.table(result);
          homeMenu();
        });
      };
    } 
    

init()