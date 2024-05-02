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
                    return res.status(403).send("Contraseña incorrecta")
                }
                
            }else{
                return res.status(404).send("Usuario no encontrado");
            }                        
        } else { 
            return res.status(400).send("Faltan datos");
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }

}

const createUser = async (req, res) =>{
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


module.exports = {login, createUser};