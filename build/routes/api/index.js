"use strict";

var router = require("express").Router();

var spiderRoute = require("./videospider"); // Book routes


router.use("/spider", spiderRoute);
module.exports = router;