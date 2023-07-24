const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res)=>{
 
 try {
   const {id} = req.params
  
   const {data} = await axios.get(`${URL}/${id}`)
   const {status, name, origin, image, gender} = data
   
      
      if(name){
  
        const character ={
          id,
          name,
          status,
          origin,
          image,
          gender
        }
  
        return res.status(200).json(character)
      }
      
      
      throw Error('Not found')
  
 } catch (error) {
   res.status(error.response.status).send(error.message)
 }

}

module.exports = getCharById