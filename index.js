const inquirer = require("inquirer"); // to get user input
const DBOperations = require("./utils");
const database = require("./utils/connection"); // Import the database connection

// Define menu options for user selection
const menuOptions = [
    {
        type: "list",
        name: "options",
        message: "Select one",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department"
        ]
    }
];

const addDepartmentOptions = [
    {
        type: "input",
        name: "departmentId",
        message: "What is the department's ID?"
    },
    {
        type: "input",
        name: "departmentName",
        message: "What is the department's name?"   
    }
];

const addRoleOptions = [
    {
        type: "input",
        name: "roleId",
        message: "What is the role's ID?"
    },
    {
        type: "input",
        name: "roleTitle",
        message: "What is the role's title?"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the role's salary?"
    },
    {
        type: "input",
        name: "departmentId",
        message: "What is the role's department ID?"
    }
];

async function addDepartmentQuestion(dbOperations) {
    try {
        let deptAnswer = await inquirer.prompt(addDepartmentOptions);
        const { departmentId, departmentName } = deptAnswer;
        const addDepartmentResult = await dbOperations.addDepartment(departmentId, departmentName);
        console.log("Department added successfully", addDepartmentResult);
    } catch (err) {
        console.error(err);
    }
}

async function addRoleQuestion(dbOperations) {
    try {
        let roleAnswer = await inquirer.prompt(addRoleOptions);
        const { roleId, roleTitle, roleSalary, departmentId } = roleAnswer;
        const addRoleResult = await dbOperations.addRole(roleId, roleTitle,roleSalary, departmentId)
        console.log("Role added successfully", addRoleResult);
    } catch (err) {
        console.error(err);
    }
}

async function init() {
    try {
        const dbOperations = new DBOperations(database);
        let answers = await inquirer.prompt(menuOptions);
        console.log(answers.options);

        switch (answers.options) {
            case "View All Employees":
                console.log("Selected View All Employees");
                try {
                    const employees = await dbOperations.viewAllEmployees();
                    if (employees.length > 0) {
                        console.log("\n");
                        console.table(employees);
                    } else {
                        console.log("No employees found.");
                    }
                } catch (error) {
                    console.error("An error occurred while retrieving employees:", error);
                }
                break;

            case "Add Roles":
                console.log("Selected Add Employee");
                break;

            case "Update Employee Role":
                console.log("Selected Update Employee Role");
                break;

            case "View All Roles":
                console.log("Selected View All Roles");
                try {
                    const roles = await dbOperations.viewAllRoles();
                    if (roles.length > 0) {
                        console.log("\n");
                        console.table(roles);
                    } else {
                        console.log("No roles found.");
                    }
                } catch (error) {
                    console.error("An error occurred while retrieving roles:", error);
                }
                break;  

            case "Add Role":
                console.log("Selected Add Role");
                addRoleQuestion(dbOperations);
                break;

            case "View All Departments":
                console.log("Selected View All Departments");
                try {
                    const departments = await dbOperations.viewAllDepartments();
                    if (departments.length > 0) {
                        console.log("\n");
                        console.table(departments);
                    } else {
                        console.log("No departments found.");
                    }
                } catch (error) {
                    console.error("An error occurred while retrieving departments:", error);
                }
                break;

            case "Add Department":
                console.log("Adding Department");
                await addDepartmentQuestion(dbOperations);
                break;
                
            default:
                console.log("Undefined option selected");
        }
    } catch (err) {
        console.error(err);
    }
}

// Initialize the program by calling the init function
init();
