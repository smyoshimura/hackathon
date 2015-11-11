var twitterArray;
var youtubeArray;
var flickerArray;

var z;  //i will be four at the end of the first loop
var


$(function(){
   $('.glyphicon-chevron-right, .glyphicon-chevron-right').click(function(){


      $('#twitter-section .container-fluid').hide();
      console.log(twitterArray);
      var limit = z+3;
      for(z; z<limit; z++){
         console.log('z + 3: ', z+3);
         author = twitterArray[z].user.name;
         profpic = twitterArray[z].user.profile_image_url;
         console.log(author);
         tweet = twitterArray[z].text;
         username = twitterArray[z].user['screen_name'];
         timeStamp = twitterArray[z].user['created_at'];
         newTweet(author, profpic, tweet, username, timeStamp);
      }




   });
});