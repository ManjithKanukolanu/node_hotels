const mongoose = require('mongoose')
const mongoUrl = 'mongodb://127.0.0.1:27017/hotels'
mongoose.connect(mongoUrl)

const db = mongoose.connection;

db.on('connected',()=>
{
    console.log('connected to mongodb')
})

db.on('disconnected',()=>
{
        console.log('disconnected to mongodb')
})

db.on('error',(error)=>
{
            console.log('connection error occured',error)
})

module.exports = db