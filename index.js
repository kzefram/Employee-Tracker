const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '12345678',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`),
    
  );

function menu() {
  inquirer
  .prompt([
    {
    type: 'list',
    message: 'What is you are looking for?',
    name: 'options',
    choices: ['department', 'roles', 'employees'],
  },
        
      ])
      .then((response) => {
        console.log(response);
        if (response.options === 'department') {
          viewDepart();
        }
        if (response.options === 'roles') {
          viewRoles();
        }
        if (response.options === 'employees') {
          viewEmploy();
        }
  });
}
menu();

function viewEmploy() {
  const sql = `SELECT * FROM employees`;

db.query(sql, (err, rows) => {
  console.table(rows);
});
}

function addDepart() {
  const sql = `INSERT INTO department (dept_name) VALUE (?)`;
  const userdata = "hr";
db.query(sql, userdata, (err, rows) => {
  console.log("Success!");
});
}


function viewDepart() {
  const sql = `SELECT * FROM department`;

db.query(sql, (err, rows) => {
  console.table(rows);
});
}


function viewRoles() {
  const sql = `SELECT * FROM roles`;

db.query(sql, (err, rows) => {
  console.table(rows);
});
}

function addRoles() {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUE (?)`;
  const userdata = "hr, 80,000$, 2";

db.query(sql, userdata, (err, rows) => {
  console.log("Success!");
});
}

function viewEmploy() {
  const sql = `SELECT * FROM employees`;

db.query(sql, (err, rows) => {
  console.table(rows);
});
}

function addEmploy() {
  const sql = `INSERT INTO employees (f_name, l_name, role_id, manager_id) VALUE (?)`;
  const userdata = "Hunter, LeBlanc, 4, 5";

db.query(sql, userdata, (err, rows) => {
  console.log("Success!");
});
}