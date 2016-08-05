var apiKey = require('./../.env').apiKey;

function Profile(){
}

Profile.prototype.getProfile = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $(".status").removeClass("error");
    if(response.name !== null){
      $(".status").text("Success! Thank you, " + response.name + ".");
    } else if (response.name === null){
      $(".status").text("Success! Thank you, " + userName + ".");
    }
    var profileUrl = "https://github.com/" + userName;
    $("#username").text(userName);
    $("#avatar").attr("src", response.avatar_url);
    $("#link").attr("href", profileUrl);
    $("#following").text(response.following);
    $("#followers").text(response.followers);
    $("#response").fadeIn();
  }).fail(function(error){
    $(".status").text("Error! Username not found.").addClass("error");
  });
};

Profile.prototype.getRepos = function(userName) {
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
      $("#repositories").append("<li class='list-group-item'><a target='_blank' href='"+ responseArray[i].html_url + "'>" + responseArray[i].name + "</a><p>" + responseArray[i].description + "</p></li>");
    }
    $("#repo-result").fadeIn();
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.profileModule = Profile;
