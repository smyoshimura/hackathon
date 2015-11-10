
 function twitterCallback(success, obj){
    console.log(success, obj);
     var author = obj.tweets.statuses[0].user.name;
     var profpic = obj.tweets.statuses[0].user.profile_image_url;
     var tweet = obj.tweets.statuses[0].text;
     var username = obj.tweets.statuses[0].user['screen_name'];
     var timeStamp = obj.tweets.statuses[0].user['created_at'];

     console.log(tweet, obj);
}
$(function(){
    $('button').click(function(){
        var search = $('input').val();
        apis.twitter.getData(search, twitterCallback);
    });
});

function newTweet(author, profpic, tweet, username, timeStamp){






    $('#twitter-section h5').append(author);
    $('.prof-pic').attr('src', profpic);
    $('.tweet-text').append(tweet);
    $('#twitter-section .col-xs-7 small').append(username);
    $('.time-stamp').append(timeStamp);

}
