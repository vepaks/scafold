const routes = require("express").Router();

// TODO add controller routes

routes.get("/", (req, res) => {
  res.render("index");
});

module.exports = routes;
