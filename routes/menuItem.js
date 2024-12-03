const express = require('express')
const router = express.Router()
const menu = require('./../models/menu')
router.get('/',async (req,res)=>{
    try{
           const data = await menu.find()  
           console.log('data fetched')
           res.json(data)
    }
    catch(err)
    {
       console.log(err)
    }
})


router.post('/',async (req,res)=>{
    try{
        const data = req.body
        const newmenu = new menu(data)
        const response = await newmenu.save()
        console.log('data saved')
    }
    catch(err)
    {
        console.log(err)
    }
})

module.exports = router