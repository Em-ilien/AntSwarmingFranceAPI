const fs = require("fs");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

const PORT = 5173;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

function loadRoutes(dir) {
  fs.readdirSync(dir).forEach((item) => {
    const fullPath = path.join(dir, item);
    const route = path
      .relative(path.join(__dirname, "routes"), fullPath)
      .replace(/\\/g, "/")
      .replace(/\.js$/, "");

    if (fs.statSync(fullPath).isDirectory()) {
      if (item.startsWith(".")) return;
      loadRoutes(fullPath);
    } else {
      const routeConfig = require(fullPath);
      // log the route
      if (route.endsWith("/index")) {
        app.use(`/${route.replace(/\/index$/, "")}`, routeConfig);
        console.log(`Loading route: ${route}`);
      } else app.use(`/${route}`, routeConfig);
    }
  });
}

loadRoutes(path.join(__dirname, "routes"));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
