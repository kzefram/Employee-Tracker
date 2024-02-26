/* Creating DataBase */

DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
    dept_id			INT					PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dept_name	    VARCHAR(30)			NOT NULL
);

CREATE TABLE roles (
    role_id         INT                 PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title           VARCHAR(30)         NOT NULL,
    salary          DECIMAL             NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(dept_id)                 
);

CREATE TABLE employees (
    employ_id       INT                 PRIMARY KEY NOT NULL AUTO_INCREMENT,
    f_name          VARCHAR(30)         NOT NULL,
    l_name          VARCHAR(30)         NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    FOREIGN KEY (manager_id) REFERENCES roles(title)
);