var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Weapon;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetByID = function(id, callback) {
    console.log(id);
    var query = 'SELECT * FROM Weapon WHERE id=' + id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}
var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Weapon;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetByID = function(id, callback) {
    console.log(id);
    var query = 'SELECT * FROM Weapon WHERE id=' + id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.Insert = function(Weapon_info, callback) {
    console.log(Weapon_info);

    var dynamic_query = 'INSERT INTO Weapon (name, description, damage) VALUES (' +
        '\'' + Weapon_info.name + '\', ' +
        '\'' + Weapon_info.description + '\',' +
        '\'' + Weapon_info.damage + '\'' +
        ');';
    console.log("test");
    console.log(dynamic_query);

    connection.query(dynamic_query,

        function (err, result) {

            if(err) {

                console.log(err);
                callback(true);
                return;
            }

            callback(false, result);
        }
    );
}