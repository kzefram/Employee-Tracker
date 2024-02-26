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