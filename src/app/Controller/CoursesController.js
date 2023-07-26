const Course = require("../Models/Courses");
const { mongooseObject } = require("../Ulti/Mongoose");

class CoursesController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/show", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  create(req, res) {
    res.render("course/create");
  }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
