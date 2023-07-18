class NewsController {
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.send("courses");
  }
}

module.exports = new NewsController();
