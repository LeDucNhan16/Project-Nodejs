const Courses = require("../Models/Courses");
const { listMongooseObject } = require("../Ulti/Mongoose");

class MeController {
  // [GET] /home
  listCourses(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("me/listCourses", {
          courses: listMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
