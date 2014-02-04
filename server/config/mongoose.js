var mongoose = require('mongoose'),
    encryption = require('../utils/encryption');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error..'));
    db.once('open', function(){
        console.log('multivision db open');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch) {
            return encryption.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    };

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
       if ( collection.length === 0) {
           var salt, hash;
           salt = encryption.createSalt();
           hash = encryption.hashPwd(salt, 'foo');
           User.create({firstName: 'foo', lastName: 'bar', username: 'foobar', salt: salt, hashed_pwd: hash, roles: ['admin']});

           salt = encryption.createSalt();
           hash = encryption.hashPwd(salt, 'john');
           User.create({firstName: 'john', lastName: 'doe', username: 'pass', salt: salt, hashed_pwd: hash, roles: []});
       }
    });
};