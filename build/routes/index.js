"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("path"),
    join = _require.join;

var router = require("express").Router();

var apiRoutes = require("./api");

var htmlRoutes = require("./html"); // API Routes


router.use("/api", apiRoutes);
router.use("/", htmlRoutes); // If no API routes are hit, send the React app

router.use(function (req, res) {
  console.log(join(__dirname, "../../build/index.html"));
  res.sendFile(join(__dirname, "../../build/index.html"));
});
var _default = router;
exports["default"] = _default;