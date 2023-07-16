const express = require("express");
const router = express.Router();

const siteController = require("../app/Controller/SiteController");

router.use("/search", siteController.search);

router.use("/", siteController.home);

module.exports = router;
