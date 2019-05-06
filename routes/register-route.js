const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt=require('bcryptjs')

router.post('/', (req, res) => {
    let user=req.body 
    const hash=bcrypt.hashSync(user.password,10)
    user.password=hash
    db('users')
    .insert(req.body)
    .then(user =>{
        res.status(200).json(user)
        })
    .catch(err=>{
        res.status(500).json({error:err,message:'Unable to sign up at this time' })
    })
      });


module.exports=router
