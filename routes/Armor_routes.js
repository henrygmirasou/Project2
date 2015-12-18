var express = require('express');
var router = express.Router();
var ArmorDal = require('../dal/Armor');

router.get('/all', function(req, res) {
    ArmorDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllArmor.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    ArmorDal.GetByID(req.query.id, function (err, result) {
            if (err) throw err;

            res.render('displayArmorInfo.ejs', {rs: result, id: req.query.id});
        }
    );
});

router.get('/create', function(req, res, next) {
    res.render('ArmorFormCreate.ejs',{ subtitle: 'Express' });
});

router.get('/save', function(req, res, next) {
    console.log("the name submitted was: " + req.query.name);
    console.log("the description submitted was:" + req.query.description);
    console.log("the defense submitted was:" + req.query.defense);

    ArmorDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data." +
                " <div style='margin-top:10px;'> <a href='/Armor/create'>Create New Armor piece?</a> </div>" +
                " <div style='margin-top:10px;'> <a href='/Aromor/all'>Back to inventory.</a> </div>");
        }
    });
});
module.exports = router;