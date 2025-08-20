var mysql = require('mysql2/promise')
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user:'root',
    password:'',
    database: 'api'
})

module.exports = Object.freeze({
    pool: poolr
})
