(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d7252c12dc1eb8da76c74c6446a2109762113dbe";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#github button").click(function(){
    var userName = $("#user").val();
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $(".status").text("Success! Thank you, " + response.name + ".");
      var profileUrl = "https://github.com/" + userName;
      $("#username").text(userName);
      $("#link").attr("href", profileUrl);
      $("#following").text(response.following);
      $("#followers").text(response.followers);
      $("#response").fadeIn();
    }).fail(function(error){
      console.log(error.responseJSON.message);
      $(".status").text("Error! Username not found.");
    });
  });

  $("#getrepos button").click(function(){
    $("#repositories").html("");
    var userName = $("#username").text();
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response){
      console.log(response);
      var responseArray = [];
      for (var index = 0; index < response.length; index += 1) {
        responseArray.push(response[index]);
      }
      console.log("array = " + responseArray);
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

},{"./../.env":1}]},{},[2]);
