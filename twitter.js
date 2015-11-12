//doc ready, when button gets click, ajax request to twitter for search results array
$(function(){
    $('button').click(function(){
        var search = $('input').val();
        apis.twitter.getData(search, twitterCallback);
    });
});
//loop through the response object and run the add tweets function with the input from each object in array

var author;
var profpic;
var tweet;
var username;
var timeStamp;
function twitterCallback(success, obj){

    if(success) {
        $('#twitter-section .container-fluid').hide();
            twitterArray = obj.tweets.statuses;
            for(z = 0; z<4; z++){
                author = obj.tweets.statuses[z].user.name;
                profpic = obj.tweets.statuses[z].user.profile_image_url;
                tweet = obj.tweets.statuses[z].text;
                username = obj.tweets.statuses[z].user['screen_name'];
                timeStamp = obj.tweets.statuses[z].user['created_at'];
                newTweet(author, profpic, tweet, username, timeStamp);
            }
    }
}



//dynamic creation
//takes in the variables needed from the each object in array
//outputs tweets with the elements added to dom
function newTweet(author, profpic, tweet, username, timeStamp) {
    var $parentContainer = $('<div>').addClass('container-fluid text-left');
    var $hr = $('<hr>');

    $('#twitter-section').append($parentContainer); //container that holds all tweets

    var $tweetContainer = $('<div>').addClass('tweet'); //solo tweet


    $tweetContainer.append($hr); //append hr to tweet container
    //first row
    var $firstRow = $('<div>').addClass('row');
    $tweetContainer.append($firstRow);

    var $containerFluid = $('<div>').addClass('container-fluid');
    $firstRow.append($containerFluid);
    var $picCol = $('<div>').addClass('col-xs-2');
    $containerFluid.append($picCol);
    var $profPic = $('<img>').addClass('prof-pic').attr('src', profpic);
    $picCol.append($profPic);

    var $authorCol = $('<div>').addClass('col-xs-7');
    var $h5 = $('<h5>').text(author);
    var $small = $('<small>').text(username);
    $authorCol.append($h5, $small);
    $containerFluid.append($authorCol);

    var $logoCol = $('<div>').addClass('col-xs-2');
    var $logoImg = $('<img>').attr('src', 'images/twitter.png').addClass('logo');
    $logoCol.append($logoImg);
    $containerFluid.append($logoCol);

    //second row
    var $row2 = $('<div>').addClass('row');
    var $container2 = $('<div>').addClass('container-fluid');
    var $tweetText = $('<p>').addClass('tweet-text').text(tweet);
    //var $timeStamp = $('<small>').addClass('time-stamp').text(timeStamp);
    $container2.append($tweetText);
    $row2.append($container2);

    $tweetContainer.append($row2);

    var $iconRow = $('<div>').addClass('row text-left');
    var $firstLink = $('<a>').attr('href', "https://twitter.com/intent/tweet?in_reply_to=463440424141459456");
    var $firstImg = $('<img>').addClass('icon').attr('src', 'images/reply.png');
    $firstLink.append($firstImg);
    $iconRow.append($firstLink);
    var $secondLink = $('<a>').attr('href', "https://twitter.com/intent/retweet?tweet_id=463440424141459456");
    var $secondImg = $('<img>').addClass('icon').attr('src', 'images/retweet.png');
    $secondLink.append($secondImg);
    $iconRow.append($secondLink);
    var $thirdLink = $('<a>').attr('href', "https://twitter.com/intent/like?tweet_id=463440424141459456");
    var $thirdImg = $('<img>').addClass('icon').attr('src', 'images/like.png');
    $thirdLink.append($thirdImg);
    $iconRow.append($thirdLink);

    $tweetContainer.append($iconRow);
    $parentContainer.append($tweetContainer);
    $('#twitter-section').append($parentContainer); //append all to tweet container

}
