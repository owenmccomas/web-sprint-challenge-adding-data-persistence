const express = require('express');
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')
const bodyParser = require('body-parser');

const server = express()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)


module.exports = server