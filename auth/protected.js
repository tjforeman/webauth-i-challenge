const bcrypt= require('bcryptjs');
const db =require('../data/dbConfig.js');

function protected(req,res,next){
    // const {username,password}= req.headers;
    // if(username&&password){
    //   db('users')
    //   .where({username})
    //   .first()
    //   .then(user => {
    //     if (user&& bcrypt.compareSync(password,user.password)) {
    //       next();
    //     } else {
    //       res.status(401).json({message: 'You shall not pass!'});
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).json({error:err,message:'Unable to see users at this time'});
    //   });
    // }
    if(req.session&& req.session.username){
      next();
    }else{
      res.status(401).json({message:'you shall not pass!'})
    }
  }

  module.exports = protected