const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router()
const User = require('../models/userModel.js')


//Sample request for all the database data
router.get('/',async (req, res)=>{
    try {
        const show = await User.find()
        res.status(201).json(show)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})


//Get single user data with id
router.get('/:id',async (req, res)=>{
    const {id} = req.params;
    try {
        const singleUser = await User.findById({_id:id})
        res.status(201).json(singleUser)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})


//delete
router.delete('/:id',async (req, res)=>{
    const {id} = req.params;
    try {
        const singleUser = await User.findByIdAndDelete({_id:id})
        res.status(201).json(singleUser)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})


//Update(Put/Patch)
router.patch('/:id',async (req, res)=>{
    const {id} = req.params;
    const {name, email, age} = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true});
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})


//Create (Save data in DB)
router.post('/',async (req, res)=>{
    const {name,email,age} = req.body;

    try {
        const userAdded = await User.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).json(userAdded);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})
module.exports = router;