var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send(
    "Please see https://github.com/em-ilien/antswarmingfranceapi for more information."
  );
});

module.exports = router;
