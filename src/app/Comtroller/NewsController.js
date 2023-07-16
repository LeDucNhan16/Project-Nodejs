class NewsController {
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.send("hgggggggggggggggggggggggd");
  }
}

module.exports = new NewsController();
