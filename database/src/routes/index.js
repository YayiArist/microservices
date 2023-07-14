const {Router} = require('express')
const router = Router()
const store = require("../database")
const {response} = require("../utils")

const {validateModel} = require("../middlewares")

router.get("/:model", validateModel, async (req, res)=>{
    
const {model}= req.params
const resp = await store[model].list()
response(res, 201, resp)
})
 
 router.get("/:model/:id", validateModel, async(req,res)=>{
    const {model, id} = req.params
    const response = await store[model].get(id)
    res.status(200).json(response)
}) 


module.exports= router