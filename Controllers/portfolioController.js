const aboutModel = require("../Models/about.model");
const contactModel = require("../Models/contact.model");
const homeModel = require("../Models/home.model");
const projectModel = require("../Models/project.model");
const skillsModel = require("../Models/skills.model");
const userModel = require("../Models/user.model");


exports.portfolioController = async (req,res) =>{
    try {

        const {name} = req?.query;

        //fetch searched user;

        const user = await userModel.findOne({username:name});

        if(!user){
            return res.status(404).json({
                message:"user not found !"
            })
        }

        const userId = user._id;

        const home = await homeModel.findOne({
            userId : userId
        });
    
        const about = await aboutModel.findOne({
            userId:userId
        });

        const skills = await skillsModel.find({
            userId:userId,
        });

        const projects = await projectModel.find({
            userId:userId  
        });

        const contact = await contactModel.findOne({
            userId:userId
        })

        console.log("user content : ",user);

        res.status(200).json({
            home,
            about,
            skills,
            projects,
            contact
        })


    } catch (error) {
        return res.status(500).json({
            message:'internal server error.',
        })
    }
}