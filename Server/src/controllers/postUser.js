const {User} = require('../DB_connection')
const { v4: uuidv4 } = require('uuid')

const postUser = async(req, res)=>{

   
   try {
      
    const {email , password} = req.body
      
    if(!email || !password){
        return res.status(400).send('Faltan datos')
    }

    // const newUser = {email, password} 

    const newUser = await User.findOrCreate({ where: { email, password } })
    const [user, created] = newUser


    return res.status(200).json(user)



 } catch (error) {
    return res.status(500).send(error.message)
 }
}

module.exports = {postUser}
