const connection = require('./connection');

class DBOperations {
    constructor(database) {
        if (!database) {
            throw new Error('Databse connection is not provided.'); // handles if undefined
        }
        this.database = database;
    }

    async viewAllDepartments() {
        try {
            //database query to retrieve all departments
            const departments = await this.database.query('SELECT id, name FROM department');
            return departments.rows;
        } catch (error) {
            throw new Error(`Error retrieving departments: ${error.message}`);
        }
        // return `SELECT id, name FROM department`;
    }

    viewAllRoles() {
        return `SELECT id, title, department_id, salary FROM role`;
    }

    viewAllEmployees() {
        return `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
                FROM employee e
                LEFT JOIN role r ON e.role_id = r.id
                LEFT JOIN department d ON r.department_id = d.id
                LEFT JOIN employee m ON e.manager_id = m.id`;
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

    // Add more query functions for other operations as needed
}

module.exports = DBOperations;