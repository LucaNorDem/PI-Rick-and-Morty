
let myFavorites = [];

const postFav =(req, res) =>{
    myFavorites.push(req.body);

    return res.json(myFavorites);
}

const deleteFav = (req, res) =>{
    myFavorites = myFavorites.filter(char => char.id !== Number(req.params.id));

    return res.json(myFavorites);
}

module.exports = {postFav,deleteFav}