const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });

const pool = new Pool({
    host: process.env.DB_HOST ||  'localhost',
    user: process.env.DB_USER ||'postgres',
    database: process.env.DB_NAME || 'inventory',
    password: process.env.DB_PASS || 'root',
});

const getEmployee = async (req, res, next) => {
    try {
        res.render('employee.html', { title: 'Employee', data: [] });
    } catch (error) {
        console.log(error);
    }
    next();
}

const getEmployees = async (req, res, next) => {
    try {
        const response = await pool.query('SELECT * FROM users');
        res.render('employee.html', { title: 'Employee', data: response.rows });
        console.log(response.rows);
    } catch (error) {
        console.log(error);
    }
    next();
};

module.exports = {
    getEmployee,
    getEmployees,
}