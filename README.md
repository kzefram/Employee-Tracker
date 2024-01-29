# Employee-Tracker

## Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribution](#contribution)
- [Tests](#tests)

## Description

With this applications you can of your employees. It's simple design makes it easy to use. I learned how to use a database using the command line as well as how to  query said database. I used MySQL, Node, inquirer and mysql2.

User Story

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Dependencies

- "inquirer": "^8.2.4",
- "mysql2": "^3.8.0"
- "nodemon": "^3.0.3"

## Installation

There is some installation required for the first opening. At your command prompt or bash prompt, enter the following commands in order after downloading:
(Using node version: v18.15.0)

- npm init --y
- npm install
- npm install --save-dev nodemon
- npm i inquirer@8.2.4
- npm i mysql2


## Usage

The purpose of this application is to keep track of employees of their roles, departements and id numbers as well as update current or new employee. This is used with the command line.

## Credits

- Karen Bourgeois https://github.com/kzefram
- UNB/Edx

## License

MIT https://github.com/kzefram/Simple-Notes?tab=MIT-1-ov-file

## Badges

- Achievement: Pull Sharkx3
- Achievement: YOLO
- Achievement: Quickdraw

## Features

Simple, stored locally, minimalist

## Contributions

n/a at this time

## Tests

n/a at this time
