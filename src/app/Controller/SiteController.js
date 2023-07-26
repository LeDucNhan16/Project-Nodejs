const Courses = require("../Models/Courses");
const { mutipleMongooseeObject } = require("../Ulti/Mongoose");

class SiteController {
  // [GET]
  home(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseeObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
