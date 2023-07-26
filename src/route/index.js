const newsRoute = require("./new");
const courseRoute = require("./courses");
const siteRoute = require("./site");

function route(app) {
  app.use("/news", newsRoute);
  app.use("/course", courseRoute);
  app.use("/", siteRoute);
}

module.exports = route;
