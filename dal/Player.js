var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Player;',
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
    var query = 'SELECT * FROM Player WHERE id=' + id;
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
    connection.query('SELECT * FROM Player;',
        function(err, result) {
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
    var query = 'SELECT * FROM Player WHERE id=' + id;
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


exports.Insert = function(Player_info, callback) {
    console.log(Player_info);
/*<!-- make a dropdown option --> */
    var dynamic_query = 'INSERT INTO Player (name, weapon, armor, asthetic) VALUES (' +
        '\'' + Player_info.name + '\', ' +
        '\'' + Player_info.weapon + '\', ' +
        '\'' + Player_info.armor + '\', ' +
        '\'' + Player_info.asthetic + '\'' +
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