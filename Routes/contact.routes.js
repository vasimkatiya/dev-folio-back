const { Router } = require("express");
const authHandler = require("../Middleware/authHandler");
const { contactController } = require("../Controllers/contactController");


const contactRouter = Router();

contactRouter.post("/",authHandler,contactController);

module.exports = contactRouter;