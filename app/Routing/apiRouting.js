var friendData = require("../Data/Friends"); 

module.exports = function(app){
	
	app.get("/api/friends", (req, res)=>{
		console.log(friendData);
		res.json(friendData);
	});

	app.post("/api/friends", (req, res)=>{
	
	var newFriend = req.body;
	var newScore = 0;
	var total = 0;
	var match = {
		name: "",
		photo: "",
		difference: 10000
	}

	// Calculating totals 
	for (var i = 0; i < friendData.length; i++) {
		total = 0;

		for (var j = 0; j < friendData[i].preferences.length; j++) {
			total += Math.abs(friendData[i].preferences[j] - newFriend.preferences[j]);

			if (total <= match.difference) {
				match.name = friendData[i].name,
				match.photo = friendData[i].photo,
				match.difference = total
			}
    	}
    }
    friendData.push(newFriend);
    res.json(match);
    console.log(match);
	});
}