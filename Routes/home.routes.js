const { Router } = require("express");
const authHandler = require("../Middleware/authHandler");
const { homeController } = require("../Controllers/homeController");


const homeRouter = Router();

homeRouter.post("/",authHandler,homeController)

module.exports = homeRouter;
