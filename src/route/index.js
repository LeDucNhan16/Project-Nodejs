const newsRoute = require("./new");
const siteRoute = require("./site");

function route(app) {
  app.use("/new", newsRoute);

  app.get("/search", siteRoute);

  app.get("/", siteRoute);
}

module.exports = route;
