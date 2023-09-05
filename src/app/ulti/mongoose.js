module.exports = {
    listMusicsMongooseObject : function(musics) {
        return musics.map(musics => musics.toObject())
    },
    musicMongooseObject : function(music) {
        return music ? music.toObject() : music
    }
}