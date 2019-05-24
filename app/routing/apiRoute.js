const router = require('express').Router();

const friends = require('../data/friends')

router.get('/friends', function (req, res) {
    res.json(friends);
})
router.post('/friends', function(req, res) {
    let newFriend = req.body;
    let lowestDiff = 1000;
    let match;
    for (let i = 0; i < friends.length; i++) {
        let currentFriend = friends[i];
        let currentFriendScores = currentFriend.scores;
        let currentDiff = 0;
        for (let j = 0; j < currentFriendScores.length; j++) {
            let scoreA = parseInt(currentFriendScores[j]);
            let scoreB = parseInt(newFriend.scores[j]);
            currentDiff = currentDiff + Math.abs(scoreA - scoreB)
        }
        
        if (currentDiff < lowestDiff) {
            match = currentFriend;
            lowestDiff = currentDiff;
        }
    }
    friends.push(newFriend);
    
    res.json(match)

})

module.exports = router;