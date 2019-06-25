//imports
var mysql = require('mysql');
var config = require('./config')
let http = require('http')
let https = require('https')
var express = require('express')
const bodyParser = require('body-parser')
const localtunnel = require('localtunnel')
const fs = require('fs')

let tunnel;
setTimeout(function() {
    tunnel = localtunnel(config.appServer.port, { subdomain: 'parkabull1' }, (err, tunnel) => {
        if (err) {
            throw err;
        } else if (tunnel.url != 'https://parkabull1.localtunnel.me') throw new Error('Failed');
        else {
            console.log(`tunnel is open on ${tunnel.url}`)
        }
    })
}, 1000);

/* tunnel.on('close', function(){
  console.log('tunnel is closed')
}) */

//following exit code isnt tested.
process.on("beforeExit", (code) => {
    console.log('exiting current process')
})


//MYSQL connection. must run the powershell first
//connection details
const connection = mysql.createConnection(config.mysql);

connection.connect((err) => {
    if (err) {
        console.log('error connecting to db')
        throw err;
    } else {
        console.log('connected to db')
    }
})

//EXPRESS
var app = express()
app.use(function(req, res, next) {
    let today = new Date();
    console.log(today.getMonth() + '/' +
        today.getDay() + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() +
        ': user\'s ip is ' + req.ip)
    next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
    //Routes
    //gets
app.get('/', function(req, res) {
    res.send('hey there')
})
app.get('/users/:username', function(req, res) {
    console.log(res)
    res.end('hey ' + req.params.username)
})


//posts
app.post('/login', function(req, res) {
    console.log('POST /login')
    console.log(req.body)
    let query = 'SELECT * FROM db.users WHERE (username=\'' + req.body.username + '\' AND password=\'' + req.body.password + '\')'; //more elegant way to do this, look at mysql npm page
    console.log(query)
    connection.query(query, (err, rows) => {
        if (err) {
            res.send({ login: false })
            throw err;
        } else if (rows.length == 1) {
            console.log('login success')
            console.log("user info: ", rows[0])
            console.log("first name", rows[0].first_name)
            console.log("user type ", rows[0].user_type)
            res.send({
                login: true,
                userType: rows[0].user_type,
                username: rows[0].username,
                email: rows[0].email,
                firstName: rows[0].first_name,
                lastName: rows[0].last_name
            })
        } else {
            res.send({ login: false })
        }
    })
})

app.post('/register', function(req, res) {
    console.log('POST /register')
    connection.query(config.queries.addStudent, [
        req.body.unumber,
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.username,
        req.body.password
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send({ response: false })
            throw err;
        } else {
            console.log(rows)
            res.send({ response: true });
        }
    })
})
app.listen(config.appServer.port)
    //curl -d "username=heh&password=oa" -X POST https://parkabull.localtunnel.me/register


/* http.createServer(app).listen(7999) */
/* https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(8000, () => {
  console.log('Listening...')
}) */