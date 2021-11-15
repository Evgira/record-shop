const express = require('express');
const router = express.Router();
const {getRecord, addRecord} = require('../controllers/recordController')

/* GET users listing. */
router.get('/', getRecord );
router.post('/', addRecord );

module.exports = router;
