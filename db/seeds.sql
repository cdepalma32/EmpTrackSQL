-- Inserts data into department table
INSERT INTO department (id, name) VALUES 
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal'),
(5, 'Service');

-- Inserts data into role table with valid department references
INSERT INTO role (id, title, salary, department_id) VALUES 
(1, 'Business Dev Representative', 50000.00, 1),
(2, 'Collection Agent', 34000.00, 1),
(3, 'Data Analyst', 74000.00, 2),
(4, 'Web Developer', 76000.00, 2),
(5, 'Finance Manager', 153000.00, 3),
(6, 'Budget Analyst', 84000.00, 3),
(7, 'Legal Supervisor', 84000.00, 4),
(8, 'Immigration Lawyer', 77000.00, 4),
(9, 'Personal Assistant', 56000, 5),
(10, 'Tech Support Representative', 47000.00, 5);

-- Ensure that employees are inserted in the correct order
-- Insert managers first and then their subordinates
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES 
(1, 'Antonia', 'Riad', 5, NULL),   -- Finance Manager (manager of Bella)
(2, 'Shane', 'Masery', 7, NULL),   -- Legal Supervisor (manager)
(3, 'John', 'Stevens', 4, NULL),   -- Web Developer (Engineering)
(4, 'James', 'Paseley', 8, NULL),  -- Immigration Lawyer (Legal)
(5, 'Bella', 'Matan', 6, 1),       -- Budget Analyst (managed by Antonia)
(6, 'Brian', 'Scerbo', 9, NULL);   -- Personal Assistant (Service)
