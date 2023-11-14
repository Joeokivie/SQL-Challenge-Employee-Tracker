DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- Table to store different departments within the company
CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50)
);

-- Table to define various roles within the company
CREATE TABLE job_titles (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    title_name VARCHAR(50),
    salary_amount DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)

);

-- Table to store employee details
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    job_id INT,
    FOREIGN KEY (job_id) REFERENCES job_titles(job_id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id) ON DELETE SET NULL
);
