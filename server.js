//imports
var mysql = require('mysql');
var config = require('./config')
let http = require('http')
var express = require('express')
const bodyParser = require('body-parser')

//MYSQL connection. must run the powershell first
//connection details
const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
}); 

connection.connect((err) => {
  if(err){
    console.log('error connecting to db')
    throw err;
  }
  else{
    console.log('connected to db')
  }
})

//EXPRESS
var app = express()
app.use(function (req, res, next) {
  let today = new Date();
  console.log(today.getMonth() + '/' +
  today.getDay() + '/' + today.getFullYear() + ' ' + today.getHours() + ':' +  today.getMinutes() + ':' + today.getSeconds()
  + ': user\'s ip is ' + req.ip)
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//Routes
//gets
app.get('/', function (req, res){
  res.send('hey there')
}) 
app.get('/users/:username', function (req, res) {
  console.log(res)
  res.end('hey ' + req.params.username)
})

//posts
app.post('/login', function(req, res){
  console.log('POST /login')
  console.log(req.body)
  let query = 'SELECT * FROM db.user WHERE (username=\'' + req.body.username + '\' AND password=\'' + req.body.password + '\')'; //more elegant way to do this, look at mysql npm page
  console.log(query)
  connection.query(query, (err, rows)=> {
    if(err){
      res.send({login: false})
      throw err;
    }
    else if(rows.length==1)
    {
      res.send({login: true})
    }
    else{
      res.send({login: false})
    }
  })
})
app.listen(config.appServer.port, config.appServer.ipv4)