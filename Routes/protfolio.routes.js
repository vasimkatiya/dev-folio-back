const { Router } = require("express");
const { portfolioController } = require("../Controllers/portfolioController");


const portRouter = Router();

portRouter.get('/',portfolioController);

module.exports = portRouter;