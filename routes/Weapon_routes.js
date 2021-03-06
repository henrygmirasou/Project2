var express = require('express');
var router = express.Router();
var WeaponDal = require('../dal/Weapon');

router.get('/all', function(req, res) {
    WeaponDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllWeapon.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    WeaponDal.GetByID(req.query.id, function (err, result) {
            if (err) throw err;

            res.render('displayWeaponInfo.ejs', {rs: result, id: req.query.id});
        }
    );
});

router.get('/create', function(req, res, next) {
    res.render('WeaponFormCreate.ejs',{ subtitle: 'Express' });
});

router.get('/save', function(req, res, next) {
    console.log("the name submitted was: " + req.query.name);
    console.log("the description submitted was:" + req.query.description);
    console.log("the damage submitted was:" + req.query.damage);

    WeaponDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data."+
                " <div style='margin-top:10px;'> <a href='/Weapon/create'>Create New Weapons</a> </div>" +
                " <div style='margin-top:10px;'> <a href='/Weapon/all'>Back to inventory</a> </div>");
        }
    });
});
module.exports = router;