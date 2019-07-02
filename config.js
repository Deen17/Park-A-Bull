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
        ip: "10.100.3.204", //put your own ip address here. run Get-NetIpAddress and look for the right ip (check for wifi/ethernet, then for preferred) or put localhost
        port: 8000,

    },
    queries: {
        addStudent: 'CALL db.add_student(?,?,?,?,?,?, @return_code); select @return_code as return_code;',
        getBuildings: 'SELECT building_name, building_code, location, lot_code_1, lot_code_2, lot_code_3 FROM db.buildings;',
        getLots: 'CALL db.get_lots_by_building_name(?, @return_code); select @return_code as return_code;', //returns lots per building and vacancies per lot
        login: 'SELECT * from db.users WHERE (username=? AND password=?);',
        getSpots: 'SELECT '

    }
}