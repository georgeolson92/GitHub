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
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response){
      var responseArray = [];
      for (var index = 0; index < response.length; index += 1) {
        responseArray.push(response[index]);
      }
      $("#repo-number").text(responseArray.length);
      for (var i = 0; i < responseArray.length; i += 1) {
        if(responseArray[i].description === null)
        {
          responseArray[i].description = "";
        }
        $("#repositories").append("<li class='list-group-item'><a href='"+ responseArray[i].html_url + "'>" + responseArray[i].name + "</a><p>" + responseArray[i].description + "</p></li>");
      }
      $("#repo-result").fadeIn();
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
