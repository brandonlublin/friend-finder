const router = require('express').Router();

const path = require('path');


//Route to Home
router.get('/', function (req, res) {
    res.sendFile('home.html', {root: path.join(__dirname, '../public')})
})
// define the survey route
router.get('/survey', function (req, res) {
    res.sendFile('survey.html', {root: path.join(__dirname, '../public')})
})

router.get('*', function (req, res, next) {
    if (req.url.indexOf('/api') === 0) return next(); 
    if (req.url.indexOf('/resources') === 0) return next(); 
    if (req.url.indexOf('/css') === 0) return next(); 
    if (req.url.indexOf('/images') === 0) return next(); 

    res.sendFile('home.html', {root: path.join(__dirname, '../public')})
})

module.exports = router;