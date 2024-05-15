const database = require('./connection');
const util = require('util');

class DBOperations {
    constructor(database) {
        if (!database) {
            throw new Error('Database connection is not provided.'); // handles if undefined
        }
        this.database = database;
        // Promisify the query method for async/await usage
        this.query = util.promisify(database.query).bind(database);
    }

    async viewAllDepartments() {
        try {
            const departments = await this.query('SELECT id, name FROM department');
            return departments;
        } catch (error) {
            throw new Error(`Error retrieving departments: ${error.message}`);
        }
    }

    async viewAllRoles() {
        try {
            const roles = await this.query('SELECT * FROM role');
            return roles;
        } catch (error) {
            throw new Error(`Error retrieving roles: ${error.message}`);
        }
    }

    async viewAllEmployees() {
        try {
            const query = `
                SELECT 
                    e.id AS EmployeeID,
                    e.first_name AS EmployeeFirstName,
                    e.last_name AS EmployeeLastName,
                    e.role_id AS RoleID,
                    m.first_name AS ManagerFirstName,
                    m.last_name AS ManagerLastName
                FROM 
                    employee e
                LEFT JOIN 
                    employee m ON e.manager_id = m.id;
            `;
            const employees = await this.query(query);
            return employees;
        } catch (error) {
            throw new Error(`Error retrieving employees: ${error.message}`);
        }
    }
    

    async addDepartment(departmentId, departmentName) {
        const query = "INSERT INTO department (id, name) VALUES (?, ?)";
        try {
            const result = await this.query(query, [departmentId, departmentName]);
            return result;
        } catch (error) {
            throw new Error(`Error adding department: ${error.message}`);
        }
    }

    async addRole(id, title, salary, departmentId) {
        const query = "INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)";
        try {
            const result = await this.query(query, [id, title, salary, departmentId]);
            return result;
        } catch (error) {
            throw new Error(`Error adding role: ${error.message}`);
        }
    }

    async addEmployee(id, firstName, lastName, roleId, managerId) {
        const query = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?,?, ?, ?, ?)";
        try {
            const result = await this.query(query, [id, firstName, lastName, roleId, managerId]);
            return result;
        } catch (error) {
            throw new Error(`Error adding employee: ${error.message}`);
        }
    }

    async updateEmployeeRole(employeeId, roleId) {
        const query = "UPDATE employee SET role_id = ? WHERE id = ?";
        try {
            const result = await this.query(query, [roleId, employeeId]);
            return result;
        } catch (error) {
            throw new Error(`Error updating employee role: ${error.message}`);
        }
    }
}

    // Add more query functions for other operations as needed


module.exports = DBOperations;