const express = require("express");
const router = express.Router();

const meController = require("../app/Controller/MeController");

router.get("/listCourses", meController.listCourses);
module.exports = router;
