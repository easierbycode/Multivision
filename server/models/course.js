var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: { type: String, required: '{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required: '{PATH} is required!'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection){
        if(collection.length === 0) {
            Course.create({ title: "Javascript in action", featured: true, published: new Date('2014-01-01'), tags: ['Javascript']});
            Course.create({ title: "C# for beginners", featured: false, published: new Date('2013-02-10'), tags: ['C#']});
            Course.create({ title: "Hello node", featured: false, published: new Date('2013-04-25'), tags: ['NodeJS']});
            Course.create({ title: "MEAN stack development", featured: true, published: new Date('2014-02-13'), tags: ['Nodejs', 'Mongodb', 'Angularjs']});
            Course.create({ title: "Hello Bootstrap", featured: false, published: new Date('2011-10-21'), tags: ['CSS']});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;