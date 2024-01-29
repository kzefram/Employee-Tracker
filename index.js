const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '12345678',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

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


//addDepart()
//viewDepart()