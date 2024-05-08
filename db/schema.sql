-- Drops the sample_db --
DROP DATABASE IF EXISTS workspace_db;

-- Creates the workspace_db database --
DROP DATABASE IF EXISTS workspace_db;
CREATE DATABASE workspace_db;
-- Uses the workspace_db database --
USE workspace_db;


CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (manager_id) 
  REFERENCES employee(id) 
  ON DELETE SET NULL
);