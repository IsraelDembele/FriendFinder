






/*
$("#add-btn").on("click", function(event) {
event.preventDefault();
var newFriend = {
  name: $("#name").val().trim(),
  photo: $("#phone").val().trim(),
  preferences: [$("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val(), $("#question6").val(), $("#question7").val(), $("#question8").val(), $("#question9").val(), $("#question10").val()]
};

$("#friend-form").html("Thanks for your submission! Meet your new best friend!");

$.post("/api/friends", newFriend)
.done(function(data) {
  $("#match-name").text(data.name);
  $("#match-image").attr("src", data.photo);
});
});

$("#close-modal").on("click", function(){
  setTimeout(function(){location.reload()}, 1000);
});*/