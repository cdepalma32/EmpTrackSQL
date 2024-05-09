const inquirer = require("inquirer"); // to get user input
const DBOperations = require("./utils");

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

    // switch statement to handle user options
       switch (answers.options) {
        case "View All Employees":
            console.log("Selected View All Employees");
            break;
        case "Add Employee":
            console.log("Selected Add Employee");
            break;
        case "Update Employee Role":
            console.log("Selected Update Employee Role");
            break;
        case "View All Roles":
            console.log("Selected View All Roles");
            break;  
        case "Add Role":
            console.log("Selected Add Role");
            break;

            // View All Departments Case
        case "View All Departments":
            console.log("Selected View All Departments");
            viewDepartments(); // calls the function to view all departments
            try {
                // defines asynchronous function to retrieve and display all departments
                const viewAllDepartments = async () => {
                    // Retrieves all departments from the database using DBOperations module
                    const departments = await new DBOperations().viewAllDepartments(); // creates new instance of DBOperations class & calls viewAllDepartments method
                    // Check if departments were retrieved successfully
                    if (departments.length > 0) {
                        console.log("\n");
                        console.table(departments); // Display the departments in a formatted table using console.table
                    } else {
                        console.log("No departments found.");
                    }
                };
    
                await viewAllDepartments(); // Call the function to retrieve and display all departments
            } catch (error) {
                console.error("An error occurred while retrieving departments:", error); // Logs errors
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

async function viewDepartments() {
    try{
        const dbOperations = new DBOperations(); // Create a new instance of DBOperations
        const departments = await dbOperations.viewAllDepartments(); // Call viewAllDepartments on the instance
        console.table(departments); // Display the departments in a formatted table
    } catch (error){

        console.error("An error occurred while retrieving departments:", error);
    }

}
// Initialize the program by calling the init function
init();