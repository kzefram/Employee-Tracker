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


function addDepart() {
  const sql = `INSERT INTO department (dept_name) VALUE (?)`;
  const userdata = "hr";
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

function questionA() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Would you like to add a department?',
      name: 'options',
      choices: ['yes', 'no'],
    }
  ])
  .then((response) => {
    console.log(response);
    if (response.options === 'yes') {
      addDepart();
    }
    if (response.options === 'no') {
      questionB();
    }
  });
}
questionA();

function questionB() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Would you like to add a role?',
      name: 'options',
      choices: ['yes', 'no'],
    }
  ])
  .then((response) => {
    console.log(response);
    if (response.options === 'yes') {
      addRoles();
    }
    if (response.options === 'no') {
      questionC();
    }
  });
}
questionB();

function questionC() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Would you like to add an employee?',
      name: 'options',
      choices: ['yes', 'no'],
    }
  ])
  .then((response) => {
    console.log(response);
    if (response.options === 'yes') {
      addEmploy();
    }
    if (response.options === 'no') {
      qustionD();
    }
  });
}
questionC();

function addRoles() {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUE (?)`;
  const userdata = "hr, 80,000$, 2";

db.query(sql, userdata, (err, rows) => {
  console.log("Success!");
});
}

function addEmploy() {
  const sql = `INSERT INTO employees (f_name, l_name, role_id, manager_id) VALUE (?)`;
  const userdata = "Hunter, LeBlanc, 4, 5";

db.query(sql, userdata, (err, rows) => {
  console.log("Success!");
});
}

function qustionD() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Would you like to update an employee?',
      name: 'options',
      choices: ['yes', 'no'],
    }
  ])
  .then((response) => {
    console.log(response);
    if (response.options === 'yes') {
      updateEmploy();
    }
    if (response.options === 'no') {
      questionE();
    }
  });
}
questionD();

function updateEmploy() {
  const sql = `UPDATE employees SET role_id = 2 WHERE id = 1`; 
  db.query(sql, (err, rows) => {
    console.log("Success!");
  });
  }

  function updateRole() {
    const sql = `UPDATE roles SET role_id = 2 WHERE id = 1`; 
    db.query(sql, (err, rows) => {
      console.log("Success!");
    });
    }

  function updateDepart() {
    const sql = `UPDATE deparment SET dept_name = Hr WHERE dept_name = hr`; 
    db.query(sql, (err, rows) => {
      console.log("Success!");
    });
    }

    function questionE() {
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'Would you like to update a role?',
          name: 'options',
          choices: ['yes', 'no'],
        }
      ])
      .then((response) => {
        console.log(response);
        if (response.options === 'yes') {
          updateRole();
        }
        if (response.options === 'no') {
          questionF();
        }
      });
    }
    questionE();

    function questionF() {
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'Would you like to update a department?',
          name: 'options',
          choices: ['yes', 'no'],
        }
      ])
      .then((response) => {
        console.log(response);
        if (response.options === 'yes') {
          updateDepart();
        }
        if (response.options === 'no') {
          questionG();
        }
      });
    }
    questionF();

    function questionG() {
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'Would you like to delete a department?',
          name: 'options',
          choices: ['yes', 'no'],
        }
      ])
      .then((response) => {
        console.log(response);
        if (response.options === 'yes') {
          deleteDepart();
        }
        if (response.options === 'no') {
          questionH();
        }
      });
    }

    questionG();

    function deleteDepart() {
      const sql = `DELETE FROM department WHERE id = 1`; 
      db.query(sql, (err, rows) => {
        console.log("Success!");
      });
      }

      function deleteRole() {
        const sql = `DELETE FROM roles WHERE id = 1`; 
        db.query(sql, (err, rows) => {
          console.log("Success!");
        });
        }

        function deleteEmploy() {
          const sql = `DELETE FROM employees WHERE id = 1`; 
          db.query(sql, (err, rows) => {
            console.log("Success!");
          });
          }

      function questionH() {
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Would you like to delete a role?',
            name: 'options',
            choices: ['yes', 'no'],
          }
          ])
          .then((response) => {
            console.log(response);
            if (response.options === 'yes') {
              deleteRole();
            }
            if (response.options === 'no') {
              questionI();
            }
            });
          }
          questionH();

          function questionI() {
            inquirer
            .prompt([
              {
                type: 'input',
                message: 'Would you like to delete an employee?',
                name: 'options',
                choices: ['yes', 'no'],
              }
            ])
            .then((response) => {
              console.log(response);
              if (response.options === 'yes') {
                deleteEmploy(id, 1);
              }
              if (response.options === 'no') {
                console.log("Goodbye!");
              }
            });
          }
          questionI();