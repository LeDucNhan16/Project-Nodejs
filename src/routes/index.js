const siteRoute = require("./site");
const MusicsRoute = require("./musics");
const MeRoute = require("./me");


function route(app) {
  app.use("/me", MeRoute);
  app.use("/musics", MusicsRoute);
  app.use("/", siteRoute);
}

module.exports = route;
