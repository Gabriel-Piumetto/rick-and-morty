const server = require('./app')
const PORT = 3001
const {conn} = require('./DB_connection')


conn.sync({force:true}).then(value=>{

    server.listen(PORT, ()=>{
        console.log(`Server raised in port: ${PORT}`)
    })

}).catch(err => console.error(err))

