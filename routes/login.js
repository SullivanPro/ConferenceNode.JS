var express = require('express');
var router = express.Router();

var modelUser = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(modelUser.isAuthentificated(req, res))
    res.redirect('/conferences')
  else
    res.render('login');
});

module.exports = router;
