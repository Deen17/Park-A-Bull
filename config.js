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
        ip: "10.226.56.51", //put your own ip address here. run Get-NetIpAddress and look for the right ip (check for wifi/ethernet, then for preferred) or put localhost
        port: 8000,

    },
    queries: {
        addStudent: 'CALL db.add_student(?,?,?,?,?,?, @return_code); select @return_code as return_code;',
        getBuildings: 'SELECT building_name, building_code, location, lot_code_1, lot_code_2, lot_code_3 FROM db.buildings;',
        getLots: 'CALL db.get_lots_by_building_name(?, @return_code); select @return_code as return_code;', //returns lots per building and vacancies per lot
        login: 'SELECT * from db.users WHERE (username=? AND password=?);',
        getVehiclesByEmail: 'CALL db.get_vehicles_by_email(?,@return_code); select @return_code as return_code;',
        setDefaultVehicle: 'Call db.set_default_vehicle(?,?,@return_code); select @return_code as return_code;',
        createReservationByBuilding: 'Call db.create_reservation_by_building(?,?,?,@reservation_id_out,@return_code); select @reservation_id_out as reservation_id; select @return_code as return_code;',
        getSpotByEmail: 'Call get_reservation_by_email(?,@return_code); select @return_code as return_code;',
        getUsers: 'SELECT unumber, first_name, last_name, email, username FROM db.users;'
    }
}