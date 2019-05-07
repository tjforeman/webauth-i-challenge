const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt=require('bcryptjs')

router.post('/', (req, res) => {
    let {username,password}=req.body 
    db('users')
    .where({username})
    .first()
    .then(user =>{
        if(user&& bcrypt.compareSync(password,user.password)){
            req.session.username=user.username
        res.status(200).json({message: `Welcome ${user.username}, you have successfully logged in `})
        }else{
            res.status(401).json({message:'you shall not pass!'})
        }
        })
    .catch(err=>{
        res.status(500).json({error:err,message:'Unable to log in at this time' })
    })
      });


module.exports=router

