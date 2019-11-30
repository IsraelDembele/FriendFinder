var express = require("express");
var path = require("path"); 


var app = express();

var PORT = 3000; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "./app/Public/"));





require("./app/Routing/htmlRoutes.js")(app);
require("./app/Routing/apiRouting")(app);
var friendData = require("./app/Data/Friends");

app.get("/api/friends", function(req, res){
    console.log(friendData);
    res.json(friendData);
});

app.listen(PORT, function(){
    console.log("server listening to " + PORT);
});