const Courses = require("../Models/Courses");
const { mutipleMongooseObject } = require("../Ulti/Mongoose");
class MeController {
  // [GET]
  edit(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("me/edit", {
          courses: mutipleMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
