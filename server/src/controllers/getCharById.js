
// const getCharById = (res, id) =>{
//     axios(`https://rym2.up.railway.app/api/character/${id}?key=LucaNorDem`)
//     .then((response)=>{
//         let char = response.data;
//         return {
//             id,
//             name: char.name,
//             gender: char.gender,
//             species: char.species,
//             origin: char.origin,
//             image: char.image,
//             status: char.status
//         }        
//     })
//     .then((response)=>{
//         res.writeHead(200, {"content-type": "application/json"});
//         res.end(JSON.stringify(response));
//     })
//     .catch((reason)=>{
//         res.writeHead(500, {"content-type": "text/plain"});
//         res.end(reason.message);    
//     })
// }

const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character/${id}?key=LucaNorDem"

const getCharById = async (req, res) => {

    const { id } = req.params;
    // console.log(typeof(id));

    try {
        const {data} = await axios(URL.replace("${id}", id))
        const character ={
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
            location: data.location

        }
        
        return character.name ?
        res.json(character) :
        res.status(404).send("Not found");

    } catch (error) {
        return res.status(500).send(error.message);
        
    }
    
}


module.exports = getCharById;