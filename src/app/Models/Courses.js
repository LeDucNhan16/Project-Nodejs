const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    name: { type: String, minLength: 20, maxLength: 250, required: true },
    description: { type: String, minLength: 20, maxLength: 250 },
    name: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", Courses);
