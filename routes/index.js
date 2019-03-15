const express = require('express')
const mysql = require('mysql')
const router = express.Router(); 

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', 
    user: 'root', 
    password: 'password',
    database: 'sampledb'
}) 

function getConnection(){
    return pool
} 

module.exports = router; 