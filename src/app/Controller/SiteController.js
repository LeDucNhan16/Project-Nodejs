const Courses = require("../Models/Courses");
const { mutipleMongooseObject } = require("../ulti/mongoose");
class SiteController {
  // [GET]
  home(req, res, next) {
    Courses.find({})
      .then((courses) =>
        res.render("home", {
          courses: mutipleMongooseObject(courses),
        })
      )
      .catch(next);
  }

  // [GET] search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
