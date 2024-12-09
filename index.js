//loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/connection')

const PfServer = express()

PfServer.use(cors())
PfServer.use(express.json())
PfServer.use(router)
PfServer.use('/upload',express.static('./upload'))

const PORT = 3000 || process.env.PORT

PfServer.listen(PORT,()=>{
    console.log(`Project Fair Server started at port ${PORT}`);
})

//resolve get request
PfServer.get('/',(req,res)=>{
    res.status(200).send(`<h2 style="color:red">Project Fair Server started and waiting!</h2>`)
})

 


