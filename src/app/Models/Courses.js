const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    name: { type: String, required: true },
    videoId: { type: String, required: true },
    image: { type: String },
    level: { type: String },
    description: { type: String },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);

Courses.plugin(mongooseDelete, { overrideMethods: "all", deleted: true });

module.exports = mongoose.model("Courses", Courses);
