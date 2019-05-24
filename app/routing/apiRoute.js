const express = require('express');
const router = express.Router()
const app = express();
const friends = require('../data/friends')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Home Route
router.get('/', function (req, res) {
    res.sendFile('home.html', {root: path.join(__dirname, '../public')})
})
//Survey Route
router.get('/survey', function (req, res) {
    res.sendFile('survey.html', {root: path.join(__dirname, '../public')})
})
router.get('/friends', function(req, res) {
    return res.json(friends)
})

module.exports = router;