var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get ('/templatelink', function(req, res, next) {
    res.render('templateexample.ejs');
  });
  res.render('index', { subtitle: 'Express' });
});

module.exports = router;
