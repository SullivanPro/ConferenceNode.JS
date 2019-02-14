const auth = require('../middlewares/auth');
const mongoose = require('../db/connection');

var userMail = null;

// Define a schema
const userSchema = new mongoose.Schema({
    _id: String,
    admin: Boolean
}, { _id: false });
// Compile our model
const User = mongoose.model('User', userSchema);

// Handles storage
exports.createUser = (mail) => {
    return User.create(
        {
            _id: mail,
            admin: false 
        },
        function (err) {
            if(err) throw err;
            userMailActif = mail;
        }
    );
}

exports.findUser = (mail, callback) => {
    User.findOne({_id: mail}, callback);
};

// Authentification
exports.createAuthentification = (mail) => {
    return auth.createAuthentification(mail);
};

exports.isAuthentificated = (req, res) => {
    return auth.isAuthentificated(req, res);
};

exports.mandatoryAuthentification = (req, res, next) => {
    return auth.mandatoryAuthentification(req, res, next);
};

// Getters and Setters
exports.getUserMail = () => {
    return userMail;
}

exports.setUser = (mail) => {
    if(mail)
        userMail = mail;
    else 
        userMail = null; // To reset a mail
}