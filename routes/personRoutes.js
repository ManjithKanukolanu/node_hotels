const express = require('express')
const router = express.Router()
const person = require('./../models/person')
router.post('/',async (req,res)=>{
    try{
        const data = req.body
        const newperson = new person(data)
        const response = await newperson.save()
        console.log('data saved')
    }
    catch(err)
    {
        console.log(err)
    }
})


router.get('/',async (req,res)=>{
    try{
           const data = await person.find()
           console.log('data fetched')
    }
    catch(err)
    {
           console.log(err)
    }
})

router.put('/:id',async (req,res)=>{
    try{
          const personid = req.params.id
          const updatedata = req.body
          const response = await person.findByIdAndUpdate(personid,updatedata,
          {
             new: true,
             runValidators : true
          })
          if(!response)
          {
             return res.status(404).json({error: 'Person not found'})
          }
          console.log('data updated')
          res.status(200).json(response)
    }
    catch(err)
    {
         console.log(err)
         res.status(500).json({error: 'Internal server error'})
    }
})
module.exports = router