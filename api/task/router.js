const express = require('express')
const router = express.Router()
const Task = require('./model')


router.get('/', (req, res, next) => {
    Task.find()
      .then(tasks => {
        res.json(tasks)
      })
      .catch(next)
  })

router.post('/', (req, res, next) => {
    const task = req.body
  
    Task.create(task)
      .then(task => {
        res.status(201).json(task)
      })
      .catch(next)
  })

module.exports = router