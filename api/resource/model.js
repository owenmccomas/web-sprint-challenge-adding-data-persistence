const db = require('../../data/dbConfig')

async function find() {
    return db('resources')
}

function findById(resource_id) {
    return db('resources').where({ resource_id })
}

async function create(resource) {
    return db('resources')
        .insert(resource)
        .then((resource_id) => {
            return findById(resource_id).first()
        })
}

module.exports = {
    find,
    create,
}