const routes = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");

routes.use(homeController);
routes.use("/users", userController);

module.exports = routes;
