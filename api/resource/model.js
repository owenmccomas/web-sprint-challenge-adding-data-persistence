// build your `Resource` model here
const db = require('../../data/dbConfig')

async function find() {
    return db('projects')
}

async function create() {
    return db('projects')
}

module.exports = {
    find,
    create,
}