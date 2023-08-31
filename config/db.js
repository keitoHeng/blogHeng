var mysql = require('mysql');

var con = mysql.createConnection({

  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database : process.env.DB_DBNAME,

}); 

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;