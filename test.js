// IP : 107.144.156.227

const mysql = require('mysql');


//connection details
const connection = mysql.createConnection({
  host: 'localhost', //localhost or your ip
  user: 'root',
  password: 'mEgN0KpPehgDtmxg',
  database: 'test_schema1'
});
//connect to db.test_schema1
connection.connect((err) => {
  if (err) 
  {
      console.log('error connecting to db')
      throw err;
  }
  console.log('Connected as thread id: ' + connection.threadId);
  
});

//test query 1: retrieve all student data from test_schema1.test
//rows[0].valid instanceof Date returns true
connection.query('select * from test_schema1.test', (err,rows)=>{
    if(err) throw err;

    console.log('data received from db:\n');
    console.log(rows);
})

