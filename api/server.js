const express = require('express');
const helmet = require('helmet');

const server = express();

const usersRouter = require('../routes/users-route.js');
const registerRouter = require('../routes/register-route.js');
const loginRouter =require('../routes/login-route.js')

server.use(helmet());
server.use(express.json());

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users',usersRouter)

module.exports=server
