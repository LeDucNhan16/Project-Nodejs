const newRoute = require("./new");
const siteRoute = require("./site");

function route(app) {
  app.use("/new", newRoute);

  app.use("/", siteRoute);
}

module.exports = route;
