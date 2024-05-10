const database = require('./connection');
const util = require('util');

class DBOperations {
    constructor(database) {
        if (!database) {
            throw new Error('Databse connection is not provided.'); // handles if undefined
        }
        this.database = database;
        // Promisify the query method for async/await usage
        this.query = util.promisify(database.query).bind(database);
    }

    async viewAllDepartments() {
        try {
            //database query to retrieve all departments
            const departments = await this.query('SELECT id, name FROM department');
            return departments;
        } catch (error) {
            throw new Error(`Error retrieving departments: ${error.message}`);
        }
        // return `SELECT id, name FROM department`;
    }

    async viewAllRoles() {
            // database query to retrieve all roles
            const query = `SELECT * FROM role`;
            try {
                const roles = await this.query(query);
                return roles;
        } catch (error) {
            throw new Error (`Error retrieving employees: ${error.message}`);
        }
    }

    async viewAllEmployees() {
        const query = `SELECT * FROM employee`;
        try {
            const employees = await this.query(query);
            return employees;
        } catch (error) {
            throw new Error(`Error retrieving employees: ${error.message}`);
        }
    }

    

    addDepartment(name) {
        return `INSERT INTO department (name) VALUES ('${name}')`;
    }

    addRole(title, salary, departmentId) {
        return `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${departmentId})`;
    }

    addEmployee(firstName, lastName, roleId, managerId) {
        return `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleId}, ${managerId})`;
    }

    updateEmployeeRole(employeeId, roleId) {
        return `UPDATE employee SET role_id = ${roleId} WHERE id = ${employeeId}`;
    }
}
    // Add more query functions for other operations as needed


module.exports = DBOperations;