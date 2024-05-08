INSERT INTO department (department_name)
VALUES  (1, 'Sales'),
        (2, 'Engineering'),
        (3, 'Finance'),
        (4, 'Legal'),
        (5, 'Service')

INSERT INTO role (role_name)
VALUES  (1, 'Business Development Representative', '50,000', 'Sales', 1),
        (2, 'Collection Agent', '34,000', 'Sales', 1),    
        (3, 'Data Analyst', '74,000', 'Engineering', 2),
        (4, 'Web Developer', '76,000', 'Engineering', 2),
        (5, 'Finance Manager', '153,000', 'Finance', 3),
        (6, 'Budget Analyst', '84,000', 'Finance', 3),
        (7, 'Legal Supervisor', '84,000', 'Legal', 4),
        (8, 'Immigration Layer', '77,000', 'Legal', 4),
        (9, 'Personal Assistant', 'Service', 5)
        (10, 'Technical Support Representative', '47,000', 'Service', 5)

INSERT INTO employee (employee_name)
VALUES  ('John', 'Stevens', 4, NULL),
        ('Bella', 'Matan', 6, 3),
        ('James', 'Paseley', 8, NULL),
        ('Brian', 'Scerbo', 9, NULL),
        ('Antonia', 'Riad', 5, NULL),
        ('Shane', 'Masery', 7, NULL)