"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = require("express").Router();

/* /api/spider */
router.route('/').post(function (req, res) {
  var _req$body = req.body,
      movie = _req$body.movie,
      ip = _req$body.ip;
  console.log(req.connection.remoteAddress);
  var url = "https://videospider.in/getticket.php?key=XQfajbgr6UlJuc8S&secret_key=zpqjtddfngl4trolf6blfts956n6ll&video_id=".concat(movie, "&ip=").concat(ip);
  console.log("Get URL: ", url);
  (0, _axios["default"])(url).then(function (data) {
    console.log("Reply: ", data.data);
    res.send(data.data);
  })["catch"](function (err) {
    return console.log(err);
  });
}); // .post();

module.exports = router;