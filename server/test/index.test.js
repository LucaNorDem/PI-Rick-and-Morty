const server = require('../src/server');
const session = require('supertest');
const agent = session(server);

describe("test de RUTAS", ()=>{

    let char1 = {id: 1, name:"Lucas"}
    let char2 = {id: 2, name:"Lucasn't"}

    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const { body } = await agent.get('/rickandmorty/character/1')

            expect(body).toHaveProperty("id")
            expect(body).toHaveProperty("name")
            expect(body).toHaveProperty("species")
            expect(body).toHaveProperty("gender")
            expect(body).toHaveProperty("status")
            expect(body).toHaveProperty("origin")
            expect(body).toHaveProperty("image")
        })

        it('Si hay un error responde con status: 500', async ()=>{
            const char  = await agent.get('/rickandmorty/character/hola')

            expect(char.statusCode).toBe(404)
        })
    })

    describe("GET /rickandmorty/login", ()=>{
        it("Si el email y password son correctos debe devolver un objeto con access: true", async ()=>{
            const {body} = await agent.get("/rickandmorty/login?email=lucascythe@gmail.com&password=lucas123")

            expect(body).toEqual({access: true})
        })

        it("Si el email y password son incorrectos debe devolver un objeto con access: false", async ()=>{
            const {body} = await agent.get("/rickandmorty/login?email=lucascythe@gmal.com&password=lucas123")

            expect(body).toEqual({access: false})
        })
    })

    describe("POST /rickandmorty/fav", ()=>{
        it("Devuelve un arreglo con el personaje", async ()=>{
            const {body} = await agent.post("/rickandmorty/fav").send(char1)

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(char1)
        })
        
        it("Enviamos un nuevo personaje y deve devolver un array con el nuevo y el anterior", async ()=>{
            const {body} = await agent.post("/rickandmorty/fav").send(char2)

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        })
        
    })

    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it("Enviamos un ID que no se encuentre agregado y debe devolver el array con los elementos ya existentes", async ()=>{
            const {body} = await agent.delete("/rickandmorty/fav/3")

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        })
        
        it("Enviamos un ID que se encuentre agregado y debe devolver el array con el elemento eliminado", async ()=>{
            const {body} = await agent.delete("/rickandmorty/fav/2")

            expect(body).toBeInstanceOf(Array)
            expect(body).toContainEqual(char1)
            expect(body).not.toContainEqual(char2)
        })
    })
})