const router = require('express').Router()


const Projects = require('../project/model')

router.get('/', (req,res,next) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(isFalse(projects));
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req, res,next) => {
    Projects.create(req.body)
    .then((project) => {
        res.status(201).json(isFalse(project)[0])
    })
    .catch(error => {
    next(error)
    })
})


const isFalse = (projects) => {
	return projects.map((project) => ({
		...project,
		project_completed: project.project_completed ? true : false,
	}));
};

module.exports = router