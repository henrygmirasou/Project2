var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Asthetic;',
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
    var query = 'SELECT * FROM Asthetic WHERE id=' + id;
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
    connection.query('SELECT * FROM Asthetic;',
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
    var query = 'SELECT * FROM Asthetic WHERE id=' + id;
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


exports.Insert = function(Asthetic_info, callback) {
    console.log(Asthetic_info);

    var dynamic_query = 'INSERT INTO Asthetic (name, description, bonus) VALUES (' +
        '\'' + Asthetic_info.name + '\', ' +
        '\'' + Asthetic_info.description + '\',' +
        '\'' + Asthetic_info.bonus + '\'' +
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