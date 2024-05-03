const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email && password) {

            const [newUser, created] = await User.findOrCreate({
                where: { email: email },
                defaults: {                    
                    password: password
                },
            });

            if (!created) {
                return res.status(409).json({message: "Ya existe usuario con ese email"})
            }                
            return res.status(200).json({message: "Ha sido registrado correctamente"});

        } else {
            return res.status(400).json({message: "Faltan datos"});
        }

        

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}



module.exports = postUser;


// const { email, password } = req.body;


// try {
//     const isUser = await User.findOne({
//         where: {
//             email: email,
//         }
//     })

//     if (isUser) {

//         return res.status(409).send("Ya existe usuario con ese email")

//     } else {

//         await User.create({
//             email,
//             password,
//         })

//         return res.status(200).send("Ha sido registrado correctamente");
//     }


// } catch (error) {
//     return res.status(500).json({ error: error.message });
// }