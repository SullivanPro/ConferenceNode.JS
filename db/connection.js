const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.connection.on('connected', function () {
    console.log('Mongoose conected.')
});
mongoose.connection.on('error', function (err) {
    throw err;
});

module.exports = mongoose;