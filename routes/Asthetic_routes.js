var express = require('express');
var router = express.Router();
var AstheticDal = require('../dal/Asthetic');

router.get('/all', function(req, res) {
    AstheticDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllAsthetic.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    AstheticDal.GetByID(req.query.id, function (err, result) {
            if (err) throw err;

            res.render('displayAstheticInfo.ejs', {rs: result, id: req.query.id});
        }
    );
});

router.get('/create', function(req, res, next) {
    res.render('AstheticFormCreate.ejs',{ subtitle: 'Express' });
});

router.get('/save', function(req, res, next) {
    console.log("the name submitted was: " + req.query.name);
    console.log("the description submitted was:" + req.query.description);
    console.log("the bonus submitted was:" + req.query.bonus);

    AstheticDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});
module.exports = router;