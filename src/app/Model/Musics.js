const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Musics = new Schema({
    title : { type : String , required : true , minLength : 10 , maxLength : 250},
    videoId : { type : String , required : true },
    image : { type : String },
    description : { type : String },
    slug : { type : String , slug : 'title' },
},{
    timestamps : true
});

Musics.plugin(mongooseDelete, { deleted : true ,  overrideMethods: 'all' });

module.exports = mongoose.model('Musics', Musics);