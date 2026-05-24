const { uploadFile } = require("../config/cloudinary.config");
const aboutModel = require("../Models/about.model");


exports.aboutController = async (req,res) =>{

    try {
        
        const {name,text} = req.body;
        const user_id = req.user?.id;
        const file = req.file;

        if(!user_id || !name || !text || !file)
        {
            return res.status(400).json({
                message:'all fields are requires.'
            })
        }

        let result = null ;

        if(file)
        {
            result = await uploadFile(file.buffer);
        }

        const imageURL = result.secure_url;

        const about = await aboutModel.create({
            userId:user_id,
            name,
            text,
            image:imageURL
        });

        res.status(201).json({
            message:'about page completed',
            about,
        });


    } catch (error) {
        return res.status(500).json({
            message:'internal server error'
        })
    }

}