const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    name: { type: String, minLength: 20, maxLength: 255 },
    description: { type: String, minLength: 20, maxLength: 255 },
    image: { type: String },
    level: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", Courses);
