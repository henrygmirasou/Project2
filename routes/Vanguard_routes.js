var express = require('express');
var router = express.Router();
var VanguardDal   = require('../dal/Vanguard');

router.get('/all', function(req, res) {
    VanguardDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllVanguard.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    VanguardDal.GetByID(req.query.id, function (err, result) {
            if (err) throw err;

            res.render('displayVanguardInfo.ejs', {rs: result, id: req.query.id});
        }
    );
});

router.get('/create', function(req, res, next) {
    res.render('VanguardFormCreate.ejs',{ subtitle: 'Express' });
});

router.get('/save', function(req, res, next) {
    console.log("the name submitted was: " + req.query.name);
    console.log("the desccription submitted was:" + req.query.description);

    VanguardDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});


module.exports = router;