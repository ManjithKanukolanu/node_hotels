const express = require('express')
const db = require('./db')
const menu = require('./models/menu')
const bodyParser = require('body-parser')
const personRoute = require('./routes/personRoutes')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())
app.use('/person',personRoute)
const menuitems = require('./routes/menuItem')
const port = process.env.PORT
app.use('/menu',menuitems)

app.get('/',function (req,res)
{
   res.send('welcome to kaki rama rao hotel')
})
app.listen(port,()=>{
    console.log('listening to port of 3000')
})

