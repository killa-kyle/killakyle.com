$(document).ready(function() {



// The Reddit API url used to get the JSON data for a particular subreddit
var redditAPI = "http://www.reddit.com/r/web_design/.json";

//jquery getJSON() method takes the api url and runs a function on it
$.getJSON(redditAPI, function (json) {

    // Set the variables from the results array
     var subreddit = json.data.children[0].data.url;
   console.log('subreddit  : ', subreddit);
 });
  






// Caching the link jquery object
var $myLink = $('a.myLink');

// Set the links properties
$myLink.prop({
    href: redditAPI,
    title: 'Click on this link to open in a new window.'
}).click(function (e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});


$("#design_critiques").append( '<p>' + $myLink + '</p>' );










}); //end newloop.js