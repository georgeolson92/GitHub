# GITHUB Profile Finder

#### By _**George Olson**_

## Description

_Find a GitHub user's profile and their repositories!_

## Specifications

* It can take input username and return full name for that user in GitHub's API.
  * _Example Input: georgeolson92_
  * _Example Output: full name: George Olson._
* It can return specific profile information for that user in GitHub's API.
    * _Example Input: georgeolson92_
    * _Example Output: name: georgeolson92, full name: George Olson, followers: 1, following: 6, avatar-url: https://avatars.githubusercontent.com/u/7614099?v=3._
* It can take previously input username and return a list of repositories for that user in GitHub's API.
  * _Example Input: georgeolson92_
  * _Example Output: Array of 30 objects containing repository information_  
* It can display specific information about each listed repository
  * _Example Input: georgeolson92_
  * _Example Output: An object returned in Array = {name: GitHub, description: "Find a GitHub user's profile and their repositories!"}_

## Setup/Installation Requirements
  * Use terminal to clone git repository to your computer._
  * Ensure you have Node.JS installed <a href="https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/introducing-npm-and-gulp">(Guide to setting up)</a>
  * Run "$ npm install" in console to ensure packages are installed
  * Run "$ bower install" in console to ensure front-end elements will be installed and functioning
  * Run "$ gulp serve" in console to run gulp tasks and open local server in your default browser
  * Web page should appear automatically, if not open the web browser of your choice and view "http://localhost:3000/" to use the web page

## Known Bugs
 _No known bugs in the current version._

## Technologies Used
_Node.js, Bower, Gulp, JavaScript, jQuery, Bootstrap, Browserify, Moment.js_

### License
*Open GPL*

### Copyright
_2016. George Olson._
