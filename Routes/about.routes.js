const { Router } = require("express");
const authHandler = require("../Middleware/authHandler");
const { aboutController } = require("../Controllers/aboutController");
const multer = require("multer");


const storage = multer.memoryStorage();

const upload = multer({
    storage:storage,
    limits:{fileSize:5*1024*1024}
});

const aboutRouter = Router();

aboutRouter.post("/",authHandler,upload.single("image"),aboutController)

module.exports = aboutRouter;