//imports
var mysql = require('mysql');
var config = require('./config')
//MYSQL connection. must run the powershell first
//connection details
const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
}); 


export function connectToDB() { connection.connect((err) => {
    if(err){
      console.log('error connecting to db')
      throw err;
    }
    else{
      console.log('connected to db')
    }
  })}