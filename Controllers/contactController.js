const contactModel = require("../Models/contact.model");


exports.contactController = async (req,res) =>{
    try {
        const user_id = req.user?.id;
        const {email,phone,instagram,linkedin,github} = req.body;

        if(!user_id || !email || !phone || !instagram || !linkedin || !github)
        {
            return res.status(400).json({
                message:'all fileds are requires.'
            });
        }

        const contact = await contactModel.create({
            userId:user_id,
            email,
            phone,
            instagram,
            linkedin,
            github
        });

        res.status(201).json({
            message:'contact page completed.',
            contact
        })

    } catch (error) {
        return res.status(500).json({
            message:'internal server error.'
        })
    }
}