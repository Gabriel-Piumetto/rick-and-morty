const app = require ('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    describe( 'GET /rickandmorty/character/:id', ()=>{

        it( 'Responde con status: 200', async()=>{
           await agent.get('/rickandmorty/character/1').expect(200);
        })
        it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
          const response = await agent.get('/rickandmorty/character/1')
          
          expect(response.body).toHaveProperty("id")
          expect(response.body).toHaveProperty("name")
          expect(response.body).toHaveProperty("gender")
          expect(response.body).toHaveProperty("status")
          expect(response.body).toHaveProperty("origin")
          expect(response.body).toHaveProperty("image")
        })
        it('Si hay un error responde con status: 500', async()=>{
          await agent.get('/rickandmorty/character/WRO').expect(500)
        })
    })
    describe("GET /rickandmorty/login", ()=>{

      it('Si la ruta recibe informacion de login correcta retorna un objeto con propiedad access en true',async()=>{
        const response = await agent.get('/rickandmorty/login?email=gabo125@gmail.com&password=soyhenry')

        expect(response.body).toEqual({access:true})
      })
      it('Sila ruta recibe informacion de login incorrecta retorna un objeto con propiedad access en false',async()=>{
        const response = await agent.get('/rickandmorty/login?email=emailerroneo@gmail.com&password=passerronea')

        expect(response.body).toEqual({access:false})

      
      })

    })
    describe( "POST /rickandmorty/fav", ()=>{
      it('Lo enviado por body debe ser devuelto en un arreglo', async()=>{

        const obj1 = {id:1, name: 'objeto uno'}

        const response = await agent.post('/rickandmorty/fav').send(obj1)

        expect(response.body).toEqual([obj1])

      })
      it('Al enviar un nuevo elemento por body el arreglo debe incluir el elemento enviado previamente',async()=>{
        const obj1 = {id:1, name: 'objeto uno'}
        const obj2 = {id:2, name:'objeto dos'}
        const response = await agent.post('/rickandmorty/fav').send(obj2)
        expect(response.body).toEqual([obj1, obj2])
      })
    })
    describe( "DELETE /rickandmorty/fav/:id", ()=>{
      it('En el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar',async()=>{
        const obj1 = {id:1, name: 'objeto uno'}
        const obj2 = {id:2, name:'objeto dos'}
        

        const response = await agent.delete('/rickandmorty/fav/0000')
        expect(response.body).toEqual([obj1, obj2])
      })
      it('Cuando envías un ID válido se elimine correctamente al personaje', async ()=>{
        const obj1 = {id:1, name: 'objeto uno'}
        const obj2 = {id:2, name:'objeto dos'}
        const response = await agent.delete('/rickandmorty/fav/1')

        expect(response.body).toEqual([obj2])
      })

    
    
    })
})