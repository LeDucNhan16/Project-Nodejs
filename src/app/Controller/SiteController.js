const Courses = require("../Models/Courses");
const { listMongooseObject } = require("../Ulti/Mongoose");

class SiteController {
  // [GET] /home
  home(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("home", {
          courses: listMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
