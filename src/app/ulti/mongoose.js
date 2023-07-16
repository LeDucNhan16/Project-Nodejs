module.exports = {
  mutipleMongooseObject: function (courses) {
    return courses.map((courses) => courses.toObject());
  },
  mongooseObject: function (course) {
    return course ? course.toObject() : course;
  },
};
