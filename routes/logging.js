const express = require('express');
const router = express.Router();
module.exports = router;


router.use(function (req, res, next) {
    console.log(`Serving new incoming request ${req.method} "${req.url}" from ${req.ip} `);
    next()
});


