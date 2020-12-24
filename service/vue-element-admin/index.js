const express = require('express');
const userRouter = require('./router/user');
const authRouter = require('./router/auth');

let service = express.Router();

service.use('/user', userRouter);
service.use('/auth', authRouter);

module.exports = service;