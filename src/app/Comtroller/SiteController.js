class SiteController {
  search(req, res) {
    res.render("search");
  }

  index(req, res) {
    res.render("home");
  }
}

module.exports = new SiteController();
