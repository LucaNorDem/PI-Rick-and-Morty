
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

const getCharById = (req, res) => {
    const { id } = req.params;
    console.log(typeof(id));
    axios(URL.replace("${id}", id))
        .then((resp) => {
            let {id,name,gender,species,origin,image,status} = resp.data;
            const char = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            console.log(char);

            return char.name ?
            res.json(char) :
            res.status(404).send("Not found");

        })
        .catch((reason) => {
            console.log(reason.message);
            return res.status(500).send(reason.message);
        })
}


module.exports = getCharById;