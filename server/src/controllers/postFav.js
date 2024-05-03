const { Favorite } = require("../DB_connection");

const postfav = async (req, res) => {
    const { id, name, origin, status, image, species, gender, location } = req.body;

    try {
        if (id && name && image) {


            const [newFav, created] = await Favorite.findOrCreate({
                where: { id },
                defaults: {
                    name,
                    origin,
                    status,
                    image,
                    species,
                    gender,
                    location,
                }
            });

            const allFavs = await Favorite.findAll();

            return res.status(200).json(allFavs);

        } else {

            return res.status(401).json({ message: "Faltan datos" });

        }


    } catch (error) {
        
        return res.status(500).json({ error: error.message });

    }

}

module.exports = postfav;