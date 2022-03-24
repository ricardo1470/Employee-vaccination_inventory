const express = require('express');
const router = express.Router();

const { getEmployee, getEmployees } = require('../controllers/employee');

router.get('/employee', getEmployee);
router.get('/data/employees', getEmployees);

module.exports = router;