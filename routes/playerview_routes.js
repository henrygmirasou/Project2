var express = require('express');
var router = express.Router();
var playerviewDal   = require('../dal/playerview');

router.get('/', function(req, res) {
    playerviewDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllplayerview.ejs', {rs: result});
        }
    );
});


module.exports = router;