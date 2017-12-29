var mongoose = require('mongoose');

// Genre Schema

var genreSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,

    },
    create_date:{
        type: Date,
        default: Date.now
    }
})
var Genre = module.exports = mongoose.model('Genre', genreSchema);

//get Genres 
module.exports.getGenres = function (callback, limit){
    Genre.find(callback).limit(limit);
}
//get Genre
module.exports.getGenreById = function (id, callback){
    Genre.findById(id, callback);
}

//Add Genre
module.exports.addGenre = function (genre, callback){
    Genre.create(genre, callback);
}
//Update Genre
module.exports.updateGenre = function (id, genre,options, callback){
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, id, callback);
}

//Delete Genre
module.exports.removeGenre = function (id, callback){
    var query = {_id: id};
    Genre.remove(query, callback);
}