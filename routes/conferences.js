var express = require('express');
var router = express.Router();

var modelUser = require('../models/users');
var modelConference = require('../models/conferences')

/* GET home page. */
router.get('/' , function(req, res, next) {
    // Pas la bonne méthode, difficulté avec les callbacks
    /*modelConference.getConferences(function(err, conferences) {
        consocle.log(conferences)
    });*/
    res.render('indexConference');
});


router.get('/:id', modelUser.mandatoryAuthentification, function(req, res, next) {
    //res.send(`${req.params}`);
});

module.exports = router;
