var express = require('express');
var router = express.Router();

var modelUser = require('../models/users');
var modelConference = require('../models/conferences');

/* GET home page. */
router.get('/', modelUser.mandatoryAuthentification, function (req, res, next) {
    // conditionner si administrateur
    // ne connait pas userData.admin ??? 
    modelUser.findUser(modelUser.getUserMail(), function (err, userData) {
        //if (userData && userData.admin)
            res.render('admin')
       // else
            //res.redirect('/')
    });
});

router.route('/addConference')
    .post(modelUser.mandatoryAuthentification, addConference)
    .get(modelUser.mandatoryAuthentification, getPageConference)

function addConference(req, res) {
    if (req.body && req.body.title && req.body.video) {
        modelConference.createConference(req.body.title, req.body.video)
    }
    res.redirect('/admin')
}

function getPageConference(req, res) {
    res.render('adminAddConference')
}

module.exports = router;
