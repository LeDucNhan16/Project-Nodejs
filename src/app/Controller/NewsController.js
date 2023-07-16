class NewsController {
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.send("couse");
  }
}

module.exports = new NewsController();
