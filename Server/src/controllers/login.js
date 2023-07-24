const users = require('../utils/users')


const login = (req, res)=>{
   
    const {email, password}= req.query
    
   const validUser =  users.filter( user => user.email===email&&user.password===password)

   if(validUser.length!==0){
    return res.status(200).json({access:true})
   }
   return res.status(200).json({access:false})


}

module.exports = login