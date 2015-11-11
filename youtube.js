//pulling video from youtube and playing
$(document).ready(function () {
    $('.btn').click(function () {
        var x = document.getElementsByTagName('iframe');
        console.log("iframe:", x);
        if (document.getElementsByTagName('iframe')) {
            $('iframe').replaceWith('<div id="player"></div>');

        }
        var y = $('#youtube-section>.col-xs-12').children()[0];
        console.log('children of youtube id:', y);
        var searchInput = $('input').val();
        console.log(searchInput);
        apis.youtube.getData(searchInput, 2, function (success, response) {
            if (success) {
                console.log(response);
                //$('#player').replaceWith();
            } else {
                console.log("YouTube Failed");
            }
        });
    });
});


//console.log(apis.youtube.playerInfo.player);

//need to find a way to get the input to register when a video is alredy present
//dom create a button to switch videos
//
//var video = $('<button>', {
//    type: "button",
//    class: "btn btn-info",
//    text: "Next"
//});
//$(document).ready(function(){
//    $('#youtube-section').append(video);
//});
//
////
////setTimeout(function () {
////    apis.youtube.stopVideo()
////}, 20000);