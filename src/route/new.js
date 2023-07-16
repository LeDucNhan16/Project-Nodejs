const express = require("express");
const router = express.Router();

const newsController = require("../app/Controller/NewsController");

router.use("/:slug", newsController.show);

router.use("/", newsController.index);

module.exports = router;
