const {User} = require("../DB_connection");

const postUser = async (req, res) => {
    const {email, password} = req.body;
    
    try {
        if(email && password){
        const [newUser, created] = await User.findOrCreate({
            where:{email: email},
            default:{
                password: password
            },
        });


    } else {
        return res.status(400).send("Faltan datos");
    }

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
    
}



module.exports = postUser;