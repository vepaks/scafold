const routes = require("express").Router();

// TODO add controller routes

routes.get("/", (req, res) => {
  res.send("you dumb!");
});

module.exports = routes;
