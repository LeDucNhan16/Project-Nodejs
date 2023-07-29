const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Courses = new Schema(
  {
    name: { type: String, minLength: 10, maxLength: 200, required: true },
    description: { type: String, minLength: 10, maxLength: 200 },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", Courses);
