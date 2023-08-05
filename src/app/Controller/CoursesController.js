const Courses = require("../Models/Courses");
const { mongooseObject } = require("../Ulti/Mongoose");

class CoursesController {
  // [GET] /home
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Courses(req.body);
    course
      .save()
      .then(() => {
        res.redirect("/me/listCourses");
      })
      .catch(next);
  }

  edit(req, res, next) {
    Courses.findById({ _id: req.params.id })
      .then((course) => {
        res.render("courses/edit", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/listCourses");
      })
      .catch(next);
  }

  deleteAndTrash(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  delete(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  restore(req, res, next) {
    Courses.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
