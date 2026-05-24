const homeModel = require("../Models/home.model");


exports.homeController = async (req,res) =>{
    try {
        
        const {name,title,description} = req.body;
        const user_id  = req.user?.id;

        if(!name || !title || !description || !user_id)
        {
            return res.status(400).json({
                message:"all fields are requires."
            });
        }

        const home = await homeModel.create({
            userId:user_id,
            name,
            title,
            description
        });

        res.status(201).json({
            message:"home page completed.",
            home
        });
        

    } catch (error) {
        return res.status(500).json({
            message:"internal server error."
        });
    }

}