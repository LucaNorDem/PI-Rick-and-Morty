const {User} = require("../DB_connection");

const postUser = async (req, res) => {
    const {email, password} = req.body;


    try {
        const isUser = await User.findOne({
            where:{email: email,
            }
        })

        if(isUser){

            return res.status(409).send("Ya existe usuario con ese email")

        }else{

            await User.create({
                email,
                password,
            })

            return res.status(200).send("Ha sido registrado correctamente");
        }


    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}



module.exports = postUser;