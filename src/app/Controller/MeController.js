const Musics = require('../Model/Musics');
const { listMusicsMongooseObject, musicMongooseObject } = require('../Ulti/Mongoose');
class MeController {
  // [GET] /home
  listMusics(req, res, next) {
    Musics.find({})
      .then((musics) => {
        res.render('me/listMusics',{
          musics : listMusicsMongooseObject(musics)
        })
      })
      .catch(next)
  }

  trashCanListMusic(req, res, next) {
    Musics.findWithDeleted({deleted : true})
      .then((musics) => {
        res.render('me/trashCanListMusic',{
          musics : listMusicsMongooseObject(musics)
        })
      })
      .catch(next)
  }

  
}

module.exports = new MeController();
