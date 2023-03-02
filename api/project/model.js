const db = require('../../data/dbConfig')

async function find() {
    return db('projects')
}

function findById(project_id) {
    return db('projects').where({ project_id })
}

async function create(project) {
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return findById([project_id])
        })
}

module.exports = {
    find,
    create,
}