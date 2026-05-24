
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
require("dotenv").config();

cloudinary.config({ 
  cloud_name: process.env.CD_CLOUD, 
  api_key: process.env.CD_KEY, 
  api_secret: process.env.CD_SECRET
});


exports.uploadFile = async (fileBuffer) => {
  try {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (result) {
            console.log("file upload:", result);
            resolve(result);
          } else {
            reject(error);
          }
        }
      );

      streamifier.createReadStream(fileBuffer).pipe(stream);
    });
  } catch (err) {
    console.log(err);
  }
};