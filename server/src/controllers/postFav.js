const Favorite = require("../DB_connection");

const postfav = async (req, res) =>{
    const {name, origin, status, image, specie, gender} = req.body;

    try {
        if (name && origin && status && image && specie && gender) {
            const newFav = await Favorite.create({
                name, 
                origin, 
                status, 
                image, 
                specie, 
                gender,
            });

            const allFavs = await Favorite.findAll();

            return res.status(200).json(allFavs);

        } else {

            return res.status(401).send("Faltan datos");

        }


    } catch (error) {

        return res.status(500).json({error: error.message});
        
    }
    
}

module.exports = postfav;