const request = require('supertest');
const routes = require('../routes/index');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });

describe ('test postgres database', () => {
    // test init route
    const pool = new Pool({
        host: process.env.DB_HOST ||  'localhost',
        user: process.env.DB_USER ||'postgres',
        database: process.env.DB_NAME || 'inventory',
        password: process.env.DB_PASS || 'root',
    });

    test('view data in admins', async () => {
        const response = await pool.query('SELECT * FROM admins');
        expect(response.rows).toBeTruthy();
    });

    test('get user by id', async () => {
        const id = 1;
        const response = await pool.query('SELECT * FROM admins WHERE id = $1', [id]);
        expect(response.rows[0]);
    })

    test('delete user', async () => {
        const id = 1;
        const response = await pool.query('DELETE FROM admins WHERE id = $1', [id]);
        expect(response.rows[0]);
    })

    test('delete all users', async () => {
        const response = await pool.query('DELETE FROM admins');
        expect(response.rows[0]);
    })

    test('create user', async () => {
        const { cedula, nombre, apellido, email} = { cedula: '123456789', nombre: 'Ricardo', apellido: 'Garcia', email: 'text5@text.com' };
        const response = await pool.query('INSERT INTO admins (cedula, nombre, apellido, email) VALUES ($1, $2, $3, $4)',[cedula, nombre,apellido, email]);
        expect(response.rows[0]);
    })

    test('test catch 404', () => {
        const response = request(routes).get('../views/error.html').send();
        response.title = 'Inventario Error';
        response.message = 'esta sera la pagina de error para la API de Inventario de vacunación';
        expect(response.message).toBe('esta sera la pagina de error para la API de Inventario de vacunación');
    })
});
