const express = require('express')
const router = express.Router()
const Resource = require('./model')


router.get('/', (req, res, next) => {
    Resource.find()
      .then(resources => {
        res.json(resources)
      })
      .catch(next)
  })

router.post('/', (req, res, next) => {
    const resource = req.body
  
    Resource.create(resource)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch(next)
  })

module.exports = router