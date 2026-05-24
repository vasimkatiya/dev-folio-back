const { Router } = require("express");
const authHandler = require("../Middleware/authHandler");
const { skillController } = require("../Controllers/skillController");


const skillsRouter = Router();

skillsRouter.post("/",authHandler,skillController);

module.exports = skillsRouter;