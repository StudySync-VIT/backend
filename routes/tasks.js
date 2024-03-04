const express = require('express')
const router = express.Router()

const {createUser} = require('../controllers/tasks');

router.route('/').get(createUser)

module.exports = router