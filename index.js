const mysql = require('mysql2');
const inquirer = require('./routes/route.js')

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
console.log(inquirer)

function viewEmploy() {
  const sql = `SELECT * FROM employees`;

db.query(sql, (err, rows) => {
  console.table(rows);
});
}