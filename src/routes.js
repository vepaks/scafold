const routes = require("express").Router();
const homeController = require("./controllers/homeController");

// TODO add controller routes

routes.use(homeController);

module.exports = routes;
