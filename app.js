var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var Vanguard = require('./routes/Vanguard_routes');
var Faction = require('./routes/Faction_routes');
var Weapon = require('./routes/Weapon_routes');
var Armor = require('./routes/Armor_routes');
var Asthetic = require('./routes/Asthetic_routes');
var Player = require('./routes/Player_routes');
var playerview = require('./routes/playerview_routes');
var factionitemsview = require('./routes/factionitemsview_routes');
var vanguarditemsview = require('./routes/vanguarditemsview_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/Vanguard', Vanguard);
app.use('/Faction', Faction);
app.use('/Weapon', Weapon);
app.use('/Armor', Armor);
app.use('/Asthetic', Asthetic);
app.use('/Player', Player);
app.use('/playerview', playerview);
app.use('/factionitemsview', factionitemsview);
app.use('/vanguarditemsview', vanguarditemsview);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
