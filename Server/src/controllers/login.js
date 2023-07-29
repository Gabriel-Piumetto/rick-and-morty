const {User} = require('../DB_connection')

const login = async(req, res)=>{

    
    try {
        
        const {email, password }= req.query
        
        if(!email|| !password){
            return res.status(400).send("Faltan datos")
        }

        const currentUser = await User.findOne({where: {email} })
      
        if(!currentUser){
            return res.status(404).send('Usuario no encontrado')
        }

        currentUser.password === password ? 
        res.status(200).json({
            access: true
         })
        : res.status(403).send('Contraseña incorrecta')


    
    
    } catch (error) {
        res.status(500).send(error.message)
    }
    
    




}

module.exports ={login}