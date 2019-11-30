var friendData = require("../Data/Friends"); 

module.exports = function(app){
	
	app.get("/api/friends", (req, res)=>{
		console.log(friendData);
		res.json(friendData);
	});

	app.post("/api/friends", (req, res)=>{
		friendData.push(req.body);
		res.json(true);
	})
}