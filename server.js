//imports
var mysql = require('mysql');
var config = require('./config')
let http = require('http')
let https = require('https')
var express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')


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
    res.send('Welcome to the Parkabull API!')
})
app.get('/lots/:name', function(req, res) {
    console.log('GET /lots/' + req.params.name)
    connection.query(config.queries.getLots, [
        req.params.name
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send('false')
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.get('/lots', function(req, res) {
    console.log('GET /lots')
    connection.query(
        config.queries.getAllLots,
        (err, rows) => {
            if (err) {
                throw err;
            } else {
                res.send(rows)
            }
        }
    )

})

app.get('/buildings', function(req, res) {
    console.log('GET /buildings')
    connection.query(
        config.queries.getBuildings,
        (err, rows) => {
            if (err) {
                res.send({ response_message: "Get Buildings Failed!" })
                throw err;
            } else {
                res.send(rows)
            }
        }
    )

})

app.get('/users', function(req, res) {
    console.log('GET /users')
    connection.query(
        config.queries.getUsers,
        (err, rows) => {
            if (err) {
                res.send({ response_message: "Get Users Failed!" })
                throw err;
            } else {
                res.send(rows)
            }
        }
    )

})

app.get('/vehicles/:email', function(req, res) {
    console.log('GET /vehicles')
    connection.query(
        config.queries.getVehiclesByEmail, [
            req.params.email
        ],
        (err, rows) => {
            if (err) {
                res.send({ response_message: "Get Vehicles Failed!" })
                throw err;
            } else {
                res.send(rows[0])
            }
        }
    )

})

app.get('/getspotbyemail/:email', function(req, res) {
    console.log('GET /getspotbyemail/' + req.params.email)
    connection.query(
        config.queries.getSpotByEmail, [
            req.params.email
        ],
        (err, rows) => {
            if (err) {
                res.send({ response_message: "Get spots Failed!" })
                throw err;
            } else {
                console.log(rows)
                res.send(rows)
            }
        }
    )

})

app.post('/login', function(req, res) {
    console.log('POST /login')
    connection.query(
        config.queries.login, [
            req.body.username,
            req.body.password
        ],
        (err, rows) => {
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

//left
app.post('/setVehicle', function(req, res) {
    console.log('POST /setVehicle')
    connection.query(config.queries.setDefaultVehicle, [
        req.body.email,
        req.body.licensePlate
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
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.post('/reserve', function(req, res) {
    console.log('POST /reserve')
    connection.query(config.queries.createReservationByBuilding, [
        req.body.email,
        req.body.vehicleId,
        req.body.buildingName
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.post('/adminregister', function(req, res) {
    console.log('POST /adminregister')
    connection.query(config.queries.addAdmin, [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.username,
        req.body.password
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.post('/report', function(req, res) {
    console.log('POST /userReport')
    connection.query(config.queries.userReport, [
        req.body.email,
        req.body.license
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

//wrong
app.post('/addbuilding', function(req, res) {
    console.log('POST /addbuilding')
    connection.query(config.queries.addBuilding, [
        req.body.buildingName,
        req.body.code,
        req.body.location,
        req.body.lot1,
        req.body.lot2,
        req.body.lot3
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.post('/password', function(req, res) {
    console.log('POST /password')
    connection.query(config.queries.changePassword, [
        req.body.email,
        req.body.oldPassword,
        req.body.newPassword
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows)
        }
    })
})

app.post('/editbuildings', function(req, res) {
    console.log('POST /editBuildings')
    connection.query(config.queries.editBuilding, [
        req.body.name,
        req.body.newName,
        req.body.newCode,
        req.body.newLoc,
        req.body.newLot1,
        req.body.newLot2,
        req.body.newLot3
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.post('/deletebuilding', function(req, res) {
    console.log('POST /deletebuilding')
    connection.query(config.queries.deleteBuilding, [
        req.body.name
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.post('/reserve', function(req, res) {
    console.log('POST /reserve')
    connection.query(config.queries.createReservationByBuilding, [
        req.body.email,
        req.body.vehicleId,
        req.body.buildingName
    ], (err, rows) => {
        if (err) {
            console.log(rows)
            res.send(rows)
            throw err;
        } else {
            console.log(rows)
            res.send(rows);
        }
    })
})

const server = app.listen(config.appServer.port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`ParkABull app listening at http://${host}:${port}`)
})