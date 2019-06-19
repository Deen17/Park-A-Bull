//module.exports = config;
module.exports = {
    mysql: {
        host: "localhost",
        user: "root",
        password: "mEgN0KpPehgDtmxg",
        database: "db"
    },
    appServer: {
        ip: "10.100.2.141", //put your own ip address here. run Get-NetIpAddress and look for the right ip (check for wifi/ethernet, then for preferred) or put localhost
        port: 8000,
        
    },
    queries: {
        addStudent: `CALL db.addStudent(?,?,?,?,?,?, @return_code), select @return_code return_code`,

    }
}