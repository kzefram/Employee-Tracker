DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
id			int					PRIMARY KEY NOT NULL AUTO_INCREMENT,
dept_name	VARCHAR(30)			NOT NULL
);

INSERT INTO department(dept_name)
VALUES ("sales"),("admin"), ("management");