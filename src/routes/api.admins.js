const express = require('express');
const router = express.Router();

const { getData, getUsers, getInfo, createUser, getUserByid, updateUser, deleteUser, deleteAllUsers, createAdmin, createEmail } = require('../controllers/inventory');

router.get('/data', getData);

// users
router.get('/data/user', getUsers);
router.get('/info', getInfo);
router.post('/data/user', createUser);
router.get('/data/user/:id', getUserByid);
router.post('/data/update/:id', updateUser);
router.get('/data/delete/:id', deleteUser);
router.delete('/data/users', deleteAllUsers);
router.get('/data/generate', createEmail);

// admin
router.get('/data/admin', createAdmin);

module.exports = router;
