const Course = require("../Models/Courses");
const { mongooseObject, mutipleMongooseObject } = require("../Ulti/Mongoose");

class CoursesController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  create(req, res) {
    res.render("courses/create");
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

  editVideo(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/edit");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
