//module.exports = config;
module.exports = {
    mysql: {
        host: "localhost",
        user: "root",
        password: "mEgN0KpPehgDtmxg",
        database: "db",
        multipleStatements: true,
    },
    appServer: {
        ip: "10.100.2.141", //put your own ip address here. run Get-NetIpAddress and look for the right ip (check for wifi/ethernet, then for preferred) or put localhost
        port: 8000,

    },
    queries: {
        addStudent: 'CALL db.add_student(?,?,?,?,?,?, @return_code); select @return_code as return_code;',
        //addStudent: `set @return_code = 100; CALL db.add_student(?,?,?,?,?,?, @return_code); select @return_code as return_code;`,
    }
}