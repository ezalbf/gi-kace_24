const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'blssdmusic',
    host: 'localhost',
    port: 5433,
    database: 'test3'
})

module.exports = pool;