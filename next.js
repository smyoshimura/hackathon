var twitterArray;
var youtubeArray;
var flickerArray;

var z;  //i will be four at the end of the first loop
var q;
var y;
$(function(){
    $('.glyphicon-chevron-right, .glyphicon-chevron-right').click(function(){

        //twitter get next
        $('#twitter-section .container-fluid').hide();
        var twitterLimit = z+3;
        for(z; z<twitterLimit; z++){
            author = twitterArray[z].user.name;
            profpic = twitterArray[z].user.profile_image_url;
            tweet = twitterArray[z].text;
            username = twitterArray[z].user['scree n_name'];
            timeStamp = twitterArray[z].user['created_at'];
            newTweet(author, profpic, tweet, username, timeStamp);
        }

        //flicker get next
        var flickerlimit = q+6;
        $('#flickr-section a').hide();

        for (q; q<flickerlimit; q++) {
            var img = $("<img>", {src: flickerArray[q]});
            var linkImg = $("<a>", {href: flickerArray[q], target: "_blank"}).attr("data-toggle","modal").attr("data-target","#flickr-modal");
            linkImg.append(img);
            $('.flickr-container').append(linkImg);
        }

        //youtube
        if (document.getElementsByTagName('iframe')) {
            $('iframe').replaceWith('<div id="player"></div>');
            y+=1;
            console.log(youtubeArray);
            apis.youtube.playVideo(youtubeArray[y].id, 300, 450);
                    onYouTubeIframeAPIReady();
                }




        //youtube get next
    });
});

