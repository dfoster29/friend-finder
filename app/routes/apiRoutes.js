// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var path = require("path");

var friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    var friendMatch = "";
    var friendMatchPic = "";
    var scoreDif = "";

    var user = req.body;

    var userScores = user.scores;
  });
};


// within the app.post 
// set variables to hold the friend match, friend match picture, and score difference
// must loop over the users scores and determine the difference at each location, add the difference up, the two people with the smallest total difference are then matched as friends
// the scores must be compared with each user 