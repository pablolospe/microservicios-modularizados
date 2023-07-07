const { Router, json } = require('express');
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res)=>{
    try {
        const { model } = req.params;
        const response = await store[model].list();
        res.status(200).json(response);
        
    } catch (error) {
        res.status(403).send(error.message)
    }
})

router.get("/:model/:id", validateModel, async (req, res)=>{
    try {
        const { model, id } = req.params;
        const response = await store[model].get(id);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(403).send(error.message)
    }
})

router.delete("/:model/:id", validateModel, async (req, res)=>{
    try {
        const { model, id } = req.params;
        const response = await store[model].deleteOne({_id: id});
        res.status(200).json(response);
    } catch (error) {
        res.status(403).send(error.message)
    }
})

router.post("/:model", validateModel, async (req, res)=>{
    try {
        const { model } = req.params;
        const data = req.body;
        const response = await store[model].insert(data);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(403).send(error.message)
    }
})

module.exports = router;
