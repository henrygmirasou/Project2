var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('Select Playerid as playerid, Playername as playername, Weaponid as weaponid, Weaponname as weaponname, Armorid as armorid, Armorname as armorname, Astheticid as astheticid, Astheticname as astheticname from PlayerView;',
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