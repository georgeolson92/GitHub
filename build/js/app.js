(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d7252c12dc1eb8da76c74c6446a2109762113dbe";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/profile.js":2}]},{},[3]);
