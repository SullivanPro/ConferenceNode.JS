var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var modelUser = require('../models/users');

// Authentification
router.post('/auth', function(req, res, next) {
  //Reset mail
  modelUser.setUser(null);
  if(req.body.name) {
    var userMail = req.body.name;
    var auth = modelUser.createAuthentification(userMail);
    if(auth) {
      res.cookie('token', auth, { maxAge: 900000, httpOnly: true });
      modelUser.findUser(userMail, function(err,userData) {
        if(!userData) 
          modelUser.createUser(userMail)
      });
      //Set mail 
      modelUser.setUser(userMail);
      return res.redirect('/conferences');
    }
    return res.redirect('/');
  }
});

module.exports = router;
