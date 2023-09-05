const Musics = require('../Model/Musics');
const { listMusicsMongooseObject } = require('../Ulti/Mongoose');
class SiteController {
  // [GET] /home
  home(req, res, next) {
    Musics.find({})
      .then((musics) => {
        res.render('home',{
          musics : listMusicsMongooseObject(musics)
        })
      })
      .catch(next)
  }
}

module.exports = new SiteController();
