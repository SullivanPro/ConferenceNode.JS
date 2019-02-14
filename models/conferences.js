const mongoose = require('../db/connection');

// Define a schema
const conferenceSchema = new mongoose.Schema({
    name: String,
    video: String
});
// Compile our model
const Conference = mongoose.model('Conference', conferenceSchema);

// Handles storage
exports.createConference = (title, video) => {
    var conference = {
        'title': title,
        'video': video
    };

    Conference.create(
        conference,
        function (err, data) {
            if (err) throw err;
        }
    );
}
// Getters and Setters
/*exports.getConference(function(err, data)) {
    return data;
});

function getConference(callback) {
    Conference.find({}, callback);
}*/
exports.getConference = (test, callback) => {
    Conference.find({}, callback);
}
