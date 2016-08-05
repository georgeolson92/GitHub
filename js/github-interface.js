var apiKey = require('./../.env').apiKey;
var Profile = require('./../js/profile.js').profileModule;

$(document).ready(function() {
  var currentProfileObject = new Profile();

  $("#github button").click(function(){
    $("#response").hide();
    $("#repo-result").hide();
    var userName = $("#user").val();
    currentProfileObject.getProfile(userName);
  });

  $("#getrepos button").click(function(){
    $("#repositories").html("");
    var userName = $("#username").text();
    currentProfileObject.getRepos(userName);
  });
});
