
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

$(function(){



    var $parentContainer = $('<div>').addClass('container-fluid');
    $('#twitter-section').append($parentContainer); //container that holds all tweets

    var $tweetContainer = $('<div>').addClass('tweet'); //solo tweet
    var $hr = $('<hr>');

    $tweetContainer.append($hr); //append hr to tweet container
    //first row
    var $firstRow = $('<div>').addClass('row');
    $tweetContainer.append($firstRow);

    var $containerFluid = $('<div>').addClass('container-fluid');
    $firstRow.append($containerFluid);
    var $picCol = $('<div>').addClass('col-xs-2');
    $containerFluid.append($picCol);
    var $profPic = $('<img>').addClass('prof-pic');
    $picCol.append($profPic);

    var $authorCol = $('<div>').addClass('col-xs-7');
    var $h5 = $('<h5>')
    var $small = $('<small>');
    $authorCol.append($h5, $small);
    $containerFluid.append($authorCol);

    var $logoCol = $('<div>').addClass('col-xs-2');
    var $logoImg = $('<img>').attr('src', 'images/twitter.png').addClass('logo');
    $logoCol.append($logoImg);
    $containerFluid.append($logoCol);

    //second row
    var $row2 = $('<div>').addClass('row');
    var $container2 = $('<div>').addClass('container-fluid');
    var $tweetText = $('<p>').addClass('tweet-text');
    var $timeStamp = $('<small>').addClass('time-stamp');
    $container2.append($tweetText, $timeStamp);
    $row2.append($container2);

    $tweetContainer.append($row2);

    var svgRow = $('<div>').addClass('row');
        var $firstLink = $('<a>').attr('href', "https://twitter.com/intent/tweet?in_reply_to=463440424141459456");
        var






    $('#twitter-section').append($tweetContainer);




    $('#twitter-section h5').append(author);
    $('.prof-pic').attr('src', profpic);
    $('.tweet-text').append(tweet);
    $('#twitter-section .col-xs-7 small').append(username);
    $('.time-stamp').append(timeStamp);

});
