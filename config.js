//module.exports = config;
module.exports = {
    mysql: {
        host: "localhost",
        user: "root",
        password: "mEgN0KpPehgDtmxg",
        database: "db"
    },
    appServer: {
        ipv4: "10.100.0.232", //put your own ip address here. run Get-NetIpAddress and look for the right ip (check for wifi/ethernet, then for preferred) or put localhost
        port: 8000
    }
}