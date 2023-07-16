const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    name: { type: String, minLength: 10, maxLength: 255 },
    description: { type: String, minLength: 10, maxLength: 255 },
    image: { type: String },
  },
  { timestamps: {} }
);

module.exports = mongoose.model("Courses", Courses);
