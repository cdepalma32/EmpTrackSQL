/* Selecting first and last name of employees, role, salary, department and manager's first name */
SELECT 
  e.first_name, 
  e.last_name AS employee, 
  r.title AS role, 
  r.salary, 
  d.name AS department, 
  m.first_name AS manager
FROM 
  employee e

/* Joining employee table with role table based on role_id */
LEFT JOIN 
  role r ON e.role_id = r.id

/* Joining role table with department table based on department_id */
LEFT JOIN 
  department d ON r.department_id = d.id

/* Joining employee table with itself (managers) based on manager_id */
LEFT JOIN 
  employee m ON e.manager_id = m.id

/* Orders the result by the last name of the employees, first name employees*/
ORDER BY 
  e.last_name, 
  e.first_name;
