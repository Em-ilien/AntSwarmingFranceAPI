const fs = require("fs");
const path = require("path");

function loadRoutes(dir, app) {
  // sort by file first, then by name
  fs.readdirSync(dir)
    .sort((a, b) => {
      if (
        fs.statSync(path.join(dir, a)).isDirectory() &&
        !fs.statSync(path.join(dir, b)).isDirectory()
      ) {
        return 1;
      } else if (
        !fs.statSync(path.join(dir, a)).isDirectory() &&
        fs.statSync(path.join(dir, b)).isDirectory()
      ) {
        return -1;
      } else {
        if (a.endsWith("/index.js") || a === "index.js") return -1;
        if (b.endsWith("/index.js") || b === "index.js") return 1;
        return a.localeCompare(b);
      }
    })
    .filter((item) => {
      return !item.startsWith(".");
    })
    .filter((item) => {
      return !item.startsWith("_");
    })
    .forEach((item) => {
      const fullPath = path.join(dir, item);
      let route = path
        .relative(path.join(__dirname, "routes"), fullPath)
        .replace(/\\/g, "/")
        .replace(/\.js$/, "");

      if (fs.statSync(fullPath).isDirectory()) {
        loadRoutes(fullPath, app);
      } else {
        const routeConfig = require(fullPath);
        if (route === "index") route = "";
        if (route.endsWith("/index")) route = route.replace(/\/index$/, "");
        app.use(`/${route}`, routeConfig);
        console.log(`/${route}`);
      }
    });
}
exports.loadRoutes = loadRoutes;
