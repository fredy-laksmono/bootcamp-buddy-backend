const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get("/", controller.getUsers);
Router.get("/:user_id", controller.getOneUser);
Router.get("/email/:user_email", controller.getUserByEmail);
Router.put("/", controller.updateUserEmail);

module.exports = Router;
