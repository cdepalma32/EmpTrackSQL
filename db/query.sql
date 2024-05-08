
/* Selecting first and last name of employees, role, salary, department and manager's first name */
SELECT employees.first_name, employees.last_name AS employee, roles.title AS role, roles.salary, departments.name AS department, managers.first_name AS manager
FROM employees

/* Joining employees table with roles table based on role_id */
LEFT JOIN roles ON employees.role_id = roles.id

/* Joining roles table with department table baesd on department_id */
LEFT JOIN departments ON roles.department_id = departments.id

/* Joining employees table with itself (managers) based on manager_id */
LEFT JOIN employees AS managers ON employees.manager_id = managers.id

/* Orders the result by the last name of the employees, first name employees*/
ORDER BY employees.last_name, employees.first_name;

