const jwt = require('jsonwebtoken');
const fs = require('fs');

// use 'utf8' to get string instead of byte array  (512 bit key)
const privateKEY  = fs.readFileSync('./bin/private.key', 'utf8');
const publicKEY  = fs.readFileSync('./bin/public.key', 'utf8'); 

// options
var signOptions = {
  expiresIn: "12h",
  algorithm: "RS256"
};

var verifyOptions = {
  expiresIn:  "12h",
  algorithm: ["RS256"]
}

exports.mandatoryAuthentification = (req, res, next) => {
  try {
    const token = req.cookies['token'];
    const decoded = jwt.verify(token, publicKEY, verifyOptions);
    req.userDate = decoded;
    next();
  } catch(e) {
    res.redirect('/login')
  }
};

exports.isAuthentificated = (req, res) => {
  try {
    const token = req.cookies['token'];
    jwt.verify(token, publicKEY, verifyOptions);
    return true;
  } catch(e) {
    return false;
  }
};

exports.createAuthentification = (mail) => {
  try {
    return jwt.sign({ email: mail }, privateKEY, signOptions);
  } catch(e) {
    throw e;
  }
};