const Musics = require('../Model/Musics');
const { listMusicsMongooseObject, musicMongooseObject } = require('../Ulti/Mongoose');
class MusicsController {

  showMusic(req,res,next) {
    Musics.findOne({slug : req.params.slug})
      .then((music) => {
        res.render('musics/show',{
          music:musicMongooseObject(music)
        })
      })
      .catch(next)
  }
  // [GET] /home
  create(req, res, next) {
    res.render('musics/create')
  }

  store(req,res,next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const music = new Musics(req.body)
    music.save()
      .then(() => {
        res.redirect('/')
      })
      .catch(next)
  }

  delete(req,res,next) {
    Musics.delete({_id : req.params.id})
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  deleteTrashCan(req,res,next) {
    Musics.deleteOne({_id : req.params.id})
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  restore(req,res,next) {
    Musics.restore({_id : req.params.id})
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  edit(req, res, next) {
    Musics.findById({_id : req.params.id})
      .then((music) => {
        res.render('musics/edit',{
          music : musicMongooseObject(music)
        })
      })
      .catch(next)
  }
  update(req, res, next) {
    Musics.updateOne({_id : req.params.id},req.body)
      .then(() => {
        res.redirect('/me/listMusics')
      })
      .catch(next)
  }
}

module.exports = new MusicsController();
