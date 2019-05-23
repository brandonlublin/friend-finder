const express = require("express");
const router = express.Router()
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Home Route
router.get('/', function (req, res) {
    res.sendFile("home.html", {root: path.join(__dirname, "../public")})
})
//Survey Route
router.get('/survey', function (req, res) {
    res.sendFile("survey.html", {root: path.join(__dirname, "../public")})
})
app.post("/api/friends", function(req, res) {

    var newFriend = req.body;

    console.log(newFriend);


    // We then add the json the user sent to the character array

    friends.push(newFriend);

    // We then display the JSON to the users
    res.json(newFriend);
});

module.exports = router;