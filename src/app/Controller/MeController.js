const Courses = require("../Models/Courses");
const { mutipleMongooseObject } = require("../Ulti/Mongoose");

class MeController {
  // [GET] /home
  listCourses(req, res, next) {
    Courses.find({})
      .then((courses) => {
        res.render("me/listCourses", {
          courses: mutipleMongooseObject(courses),
        });
      })
      .catch(next);
  }

  listCoursesTrash(req, res, next) {
    Courses.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/listCoursesTrash", {
          courses: mutipleMongooseObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
