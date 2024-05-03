const { User } = require("../DB_connection");


const login = async (req, res) =>{
    const {email, password} = req.query;

    try {
        if(email && password ){
            const userLog = await User.findOne({
                where:{email: email,
                }
            })

            if( userLog ){
                if(userLog.password === password){
                    return res.status(200).json({access: true});
                }else{
                    return res.status(403).json({message: "Contraseña incorrecta"})
                }
                
            }else{
                return res.status(404).json({message: "Usuario no encontrado"});
            }                        
        } else { 
            return res.status(400).json({message: "Faltan datos"});
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }

}



module.exports = login;