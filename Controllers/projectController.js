const projectModel = require("../Models/project.model");


exports.projectController = async (req,res) =>{
    try {
        const {project_name,tech,link,github_link} = req.body;
        const user_id = req.user?.id;

        if(!project_name || !tech || !link || !github_link || !user_id);
        {
            return res.status(400).json({
                message:'all fields are requires.',
            });
        }

        const project = await projectModel.create({
            userId:user_id,
            project_name,
            tech,
            link,
            github_link
        });

        res.status(201).json({
            message:'project page completed',
            project
        });

    } catch (error) {
        return res.status(500).json({
            message:'internal server error.'
        })
    }
}