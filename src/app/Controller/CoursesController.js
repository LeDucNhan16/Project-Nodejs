const Courses = require("../Models/Courses");
const { mongooseObject } = require("../Ulti/Mongoose");
class CoursesController {
  // [GET] courses/:slug video
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
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

  // [GET] /courses/edit
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", {
          course: mongooseObject(course),
        });
      })
      .catch(next);
  }

  // [PUT] /courses/update
  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/edit");
      })
      .catch(next);
  }

  // [DELETE] /courses/delete
  delete(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
