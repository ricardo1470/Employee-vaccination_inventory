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

const getData = async (req, res, next) => {
    try {
        res.render('data.html', { title: 'Data', data: [] });
    } catch (error) {
        console.log(error);
    }
    next();
}

const getUsers = async (req, res, next) => {
    try {
        const response = await pool.query('SELECT * FROM admins');
        res.render('user.html', { title: '@Ricardo1470', data: response.rows });
    } catch (error) {
        console.log(error);
    }
    next();
};


const getInfo = async (req, res, next) => {
    try {
        const response = await pool.query('SELECT * FROM admins');
        res.render('info.html', { title: 'Info', data: response.rows });
    } catch (error) {
        console.log(error);
    }
    next();
}

const createUser = async (req, res, next) => {
    try{
        const { cedula, nombre, apellido, email} = req.body;
        const response = await pool.query('INSERT INTO admins (cedula, nombre, apellido, email) VALUES ($1, $2, $3, $4)',[cedula, nombre,apellido, email]);
        console.log(response.rows);
        res.render('user.html', { title: 'User', data: response.rows });
    } catch (error) {
        console.log(error);
    }
    next();
};

const getUserByid = async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM admins WHERE id = $1', [id]);
        res.render('update.html', { title: 'Update Info', data: response.rows[0] });
        console.log(response.rows);
    } catch (error) {
        console.log(error);
    }
    next();
};

const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { cadula, nombre, apellido, email } = req.body;
        const response = await pool.query('UPDATE admins SET cadula = $1, nombre = $2, apellido = $3, email = $4 WHERE id = $5', [cadula, nombre, apellido, email, id]);
        res.render('index.html', { title: 'Vaccination inventory', message: 'User updated successfully' });
    } catch (error) {
        console.log(error);
    }
    next();
}

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM admins WHERE id = $1', [id]);
        res.render('index.html', { title: 'Vaccination inventory', message: `User ${id} deleted Successfully`});
        console.log(`User ${id} deleted Successfully`);
    } catch (error) {
        console.log(error);
    }
    next();
};

const deleteAllUsers = async (req, res, next) => {
    try {
        const response = await pool.query('DELETE FROM admins');
        res.render('index.html', { title: 'Vaccination inventory', message: 'All users deleted successfully' });
        console.log(response.rows);
    } catch (error) {
        console.log(error);
    }
    next();
};

const createEmail = async (req, res, next) => {
    try {
        const response = await pool.query('SELECT * FROM admins');
        res.render('email.html', { title: 'Email', data: response.rows });
    } catch (error) {
        console.log(error);
    }
    next();
}

const createAdmin = async (req, res, next) => {
    res.render('admin.html', { title: 'Admin' });
    next();
};

module.exports = {
    getData,
    getUsers,
    getInfo,
    createUser,
    getUserByid,
    updateUser,
    deleteUser,
    deleteAllUsers,
    createEmail,
    createAdmin,
}
