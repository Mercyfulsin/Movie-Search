const router = require("express").Router();
const spiderRoute = require("./videospider");

// Book routes
router.use("/spider", spiderRoute);

module.exports = router;
