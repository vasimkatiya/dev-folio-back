const { Router } = require("express");
const authHandler = require("../Middleware/authHandler");
const { projectController } = require("../Controllers/projectController");


const projectRouter = Router();

projectRouter.post("/",authHandler,projectController);

module.exports = projectRouter;