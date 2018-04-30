//server-side render
const express = require('express');
const router = express.Router();

const staticPages = require('../controllers/StaticPages');

router.get('*', staticPages.path);

module.exports = router;
