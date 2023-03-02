const express = require('express')
const router = express.Router()
const Project = require('./model')


router.get('/', (req, res, next) => {
    Project.find()
      .then(projects => {
        res.json(projects)
      })
      .catch(next)
  })

router.post('/', (req, res, next) => {
    const project = req.body
    console.log(project)
    Project.create(project)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
  })

module.exports = router