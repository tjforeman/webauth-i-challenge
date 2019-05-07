const express = require('express');
const helmet = require('helmet');
const session=require('express-session')

const server = express();

const sessionConfig = {
    name: 'cookie', 
    secret: 'nom nom nom',
    cookie: {
      httpOnly: true, 
      maxAge: 1000 * 60 * 2, 
      secure: false, 
    },
    resave: false, 
    saveUninitialized: true, 
  };

const usersRouter = require('../routes/users-route.js');
const registerRouter = require('../routes/register-route.js');
const loginRouter =require('../routes/login-route.js')

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users',usersRouter)

module.exports=server
