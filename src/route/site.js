const express = require("express");
const router = express.Router();

const siteController = require("../app/Comtroller/SiteController");

router.use("/search", siteController.search);

router.use("/", siteController.index);

module.exports = router;
