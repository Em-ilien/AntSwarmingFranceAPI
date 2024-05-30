// THIS FILE IS FOR DEMONSTRATION PURPOSES ONLY.

var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  // TODO - Add your own logic here
  res.json("New route");
});

module.exports = router;
