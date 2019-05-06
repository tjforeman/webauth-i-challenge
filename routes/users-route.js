const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('users')
    .then(users=>{
      res.status(200).json(users)
    })
    .catch(err =>{
        res.status(500).json({error:err,message:'Unable to get the Users at this time.'})
    })
  });


module.exports=router