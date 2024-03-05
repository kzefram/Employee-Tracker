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
    inquirer.prompt([
      {
        type: 'list',
        message: 'What are you looking for?',
        name: 'action',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee',
          'Update a role',
          'Update a department',
          'Delete a department',
          'Delete a role',
          'Delete an employee'
        ]
      }
    ])
    .then(answers => {
      switch (answers.action) {
        case 'View all departments':
          viewDepart();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmploy();
          break;
        case 'Add a department':
          addDepart();
          break;
        case 'Add a role':
          addRoles();
          break;
        case 'Add an employee':
          addEmploy();
          break;
        case 'Update an employee':
          updateEmploy();
          break;
        case 'Update a role':
          updateRoles();
          break;
        case 'Update a department':
          updateDepart();
          break;
        case 'Delete a department':
          deleteDepart();
          break;
        case 'Delete a role':
          deleteRoles();
          break;
        case 'Delete an employee':
          deleteEmploy();
          break;
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

function viewEmploy() {
  const sql = `SELECT * FROM employees`;

db.query(sql, (err, rows) => {
  console.table(rows);
});
}

function addDepart() {
  const sql = `INSERT INTO department (dept_name) VALUE (?)`;
  inquirer
  .prompt([
  {
    name: 'dept_name', 
    value: 'What is the department name?'
  },
])
  .then(answers => {
    const userdata = [answers.dept_name];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  });
}

function addRoles() {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUE (?, ?, ?)`;

  inquirer
  .prompt([
  {
    name: 'title', 
    value: 'What is the title of the role?'
  },
  {
    name: 'salary',
    value: 'What is the salary of the role?'
  },
  {
    name: 'department_id',
    value: 'What is the department id?'
  }
])
  .then(answers => {
    const userdata = [answers.title, answers.salary, answers.department_id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  });
}

function addEmploy() {
  const sql = `INSERT INTO employees (f_name, l_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

  inquirer.prompt([
    {
      name: 'f_name', 
      message: 'What is the first name?'
    },
    {
      name: 'l_name',
      message: 'What is the last name?'
    },
    {
      name: 'role_id',
      message: 'What is the role id?'
    },
    {
      name: 'manager_id',
      message: 'What is the manager id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.f_name, answers.l_name, answers.role_id, answers.manager_id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  });
}