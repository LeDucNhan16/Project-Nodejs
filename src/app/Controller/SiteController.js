const Courses = require("../Models/Courses");
const { mutipleMongooseObject } = require("../Ulti/Mongoose");

class SiteController {
  // [GET]
  home(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
