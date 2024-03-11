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
 
  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      console.table(rows);
  })
  })

  .then(answers => {
    if (answers.action === 'Return to main menu') {
      menu();
    } else {
      process.exit();
    }
  });
    //return restart();
}


function viewDepart() {
  const sql = `SELECT * FROM department`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.table(rows);
        resolve();
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function viewRoles() {
  const sql = `SELECT * FROM roles`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.table(rows);
        resolve();
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function viewEmploy() {
  const sql = `SELECT * FROM employees`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.table(rows);
        resolve();
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
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
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
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
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
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
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function updateEmploy() {
  const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

  inquirer.prompt([
    {
      name: 'role_id',
      message: 'What is the new role id?'
    },
    {
      name: 'id',
      message: 'What is the employee id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.role_id, answers.id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function updateRoles() {
  const sql = `UPDATE roles SET title = ?, salary = ?, department_id = ? WHERE id = ?`;

  inquirer.prompt([
    {
      name: 'title',
      message: 'What is the new title?'
    },
    {
      name: 'salary',
      message: 'What is the new salary?'
    },
    {
      name: 'department_id',
      message: 'What is the new department id?'
    },
    {
      name: 'id',
      message: 'What is the role id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.title, answers.salary, answers.department_id, answers.id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function updateDepart() {
  const sql = `UPDATE department SET dept_name = ? WHERE id = ?`;

  inquirer.prompt([
    {
      name: 'dept_name',
      message: 'What is the new department name?'
    },
    {
      name: 'id',
      message: 'What is the department id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.dept_name, answers.id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function deleteDepart() {
  const sql = `DELETE FROM department WHERE id = ?`;

  inquirer.prompt([
    {
      name: 'id',
      message: 'What is the department id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function deleteRoles() {
  const sql = `DELETE FROM roles WHERE id = ?`;

  inquirer.prompt([
    {
      name: 'id',
      message: 'What is the role id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));
}

function deleteEmploy() {
  const sql = `DELETE FROM employees WHERE id = ?`;

  inquirer.prompt([
    {
      name: 'id',
      message: 'What is the employee id?'
    }
  ])
  .then(answers => {
    const userdata = [answers.id];

    db.query(sql, userdata, (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!");
      }
    });
  })
  .then(() => nextAction())
  .catch(err => console.error(err));  
}

function nextAction() {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do next?',
      name: 'nextAction',
      choices: ['Return to main menu', 'Exit']
    }
  ])
  .then(answers => {
    if (answers.nextAction === 'Return to main menu') {
      menu();
    } else {
      process.exit();
    }
  });
}