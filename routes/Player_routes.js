var express = require('express');
var router = express.Router();
var PlayerDal   = require('../dal/Player');
var WeaponDal = require('../dal/Weapon');
var ArmorDal = require('../dal/Armor');
var AstheticDal = require('../dal/Asthetic');

router.get('/all', function(req, res) {
    PlayerDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllPlayer.ejs', {rs: result, rt:result});
        }
    );
});

router.get('/', function (req, res) {
    PlayerDal.GetByID(req.query.id, function (err, result) {
            if (err) throw err;

            res.render('displayPlayerInfo.ejs', {rs: result, id: req.query.id});
        }
    );
});

router.get('/create', function(req, res, next) {
        ArmorDal.GetAll(function (err, result) {
            res.render('PlayerFormCreate.ejs', {subtitle: 'Express', Armor: result});
        });
         WeaponDal.GetAll(function(err, result){
            res.render('PlayerFormCreate.ejs', {subtitle: 'Express', Weapon: result});
        });
        AstheticDal.GetAll(function(err, result){
            res.render('PlayerFormCreate.ejs', {subtitle: 'Express', Asthetic: result});
        });
});


router.get('/save', function(req, res, next) {
    console.log("the name submitted was: " + req.query.name);
    console.log("the weapon submitted was:" + req.query.weapon);
    console.log("the armor submitted was:" + req.query.armor);
    console.log("the asthetic submitted was:" + req.query.asthetic);
    PlayerDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data. Create another Player?" +
                " <div style='margin-top:10px;'> <a href='/Player/create'>Create New Guardian</a> </div>" +
                " <div style='margin-top:10px;'> <a href='/'>Home</a> </div>" +
                " <div style='margin-top:10px;'> <a href='/Player/all'>All Guardians</a> </div>");



        }
    });
});


module.exports = router;