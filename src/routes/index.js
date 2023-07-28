const courseRoute = require("./courses");
const meRoute = require("./me");
const siteRoute = require("./site");

function route(app) {
  app.use("/courses", courseRoute);
  app.use("/me", meRoute);

  app.use("/", siteRoute);
}

module.exports = route;
