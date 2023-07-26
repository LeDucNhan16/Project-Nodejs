const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nl_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("thanh cong");
  } catch (error) {
    console.log("error");
  }
}

module.exports = { connect };
