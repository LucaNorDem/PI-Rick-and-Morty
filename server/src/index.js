// const http = require("http");
// const {getCharById} = require("./controllers/getCharById")

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     const id = Number(url.split("/").pop())
    
//     if(url.includes("/rickandmorty/character")){
//         getCharById(res, id);
//     }

// }).listen(3001, "localhost");




const server = require("./server");

const PORT = 3001;


server.listen(PORT, ()=>{
    console.log("Server raised in port: " + PORT);
})