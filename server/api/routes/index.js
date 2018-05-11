const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const questionRoutes = require('./question');

router.use('/', questionRoutes);
router.use('/user', userRoutes);

module.exports = router;
