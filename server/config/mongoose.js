var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error..'));
    db.once('open', function(){
        console.log('multivision db open');
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultCourses();
};