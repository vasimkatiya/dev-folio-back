const skillsModel = require("../Models/skills.model");


exports.skillController = async (req,res) =>{
    try {
        
        const user_id = req.user?.id;
        const {skills} = req.body;

        if(!user_id || !skills)
        {
            return res.status(400).json({
                message:'internal server error.'
            })
        }

        const data = await skillsModel.create({
            userId:user_id,
            skills
        });

        res.status(201).json({
            message:'internal server error.',
            data
        })


    } catch (error) {
        return res.status(500).json({
            message:'internal server error'
        })
    }
}