const Courses = require("../Models/Courses");
const { mongooseObject } = require("../ulti/mongoose");

class CoursesController {
  // [GET] courses/course
  course(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }
  // [GET] courses/course
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Courses(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
