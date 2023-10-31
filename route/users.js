const express = require("express");
const router = express.Router()

// to get all users
router.get('/users',(req,res)=>{
    res.send('welcome to users page')
})

// to get one particular user
router.get('/users/:id', (req,res)=>{
    res.send('welcome to one user')
})

// to add a new user
router.post('/users',(req,res)=>{
    res.send('new user added')
})

// to update a new user
router.put('/users/:id',(req,res)=>{
    res.send('new user added')
})

// to delete a new user
router.delete('/users/:id',(req,res)=>{
    res.send('new user added')
})








module.exports = router 