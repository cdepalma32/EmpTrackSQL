const inquirer = require("inquirer"); // to get user input
const DBOperations = require("./utils");
const database = require("./utils/connection"); // Import the database connection

// Define menu options for user selection
const menuOptions = [
{ // create typelist - check doc
    type : "list",
    name:  "options",
    message: "Select one",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
}
]
// function to initialize program
async function init() {
    try {
    //ask questions and store answers; waiting for inquirer to ask variable
    let answers = await inquirer.prompt(menuOptions);
    console.log(answers.options);

    // Create a new instance of DBOperations with the database connection
    const dbOperations = new DBOperations(database);

    // switch statement to handle user options


       switch (answers.options) {
        
        // View All Employees
        case "View All Employees":
            console.log("Selected View All Employees");
            try {
                const employees = await dbOperations.viewAllEmployees();
                if (employees.length > 0) {
                    console.log("/n");
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

            // View all Roles Case
        case "View All Roles":
            console.log("Selected View All Roles");
            try {
                const roles = await dbOperations.viewAllRoles();
                if (roles.length > 0) {
                    console.log("/n");
                    console.table(roles);
                } else {
                    console.log("No roles found.");
                }
            } catch (error) {
                console.error("An error occurred while retrieving roles:", error);
            }
                break;  


                // Add Roles Case
            case "Add Role":
            console.log("Selected Add Role");
            break;

           // View All Departments Case
           case "View All Departments":
            console.log("Selected View All Departments");
            try {
                // Retrieve and display all departments using the DBOperations instance
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
            console.log("Selected Add Department");
                break;
        default:
            console.log("Undefined answers.options ")
       }
    }
    catch (err) {
        console.error(err);
    }
}

// Initialize the program by calling the init function
init();