//pulling video from youtube and playing
$(document).ready(function () {
    $('.btn').click(function () {
        if(document.getElementsByTagName('iframe')){
            $('iframe').replaceWith('<div id="player"></div>');
        }
        var searchInput=$('input').val();
        console.log(searchInput);
        apis.youtube.getData(searchInput,5, function(success, response){
            if(success) {
                console.log(response);
                apis.youtube.playVideo(response.video[0].id);
               setTimeout(function () {
                    apis.youtube.stopVideo()
                }, 20000);
                //$('#player').replaceWith();
            }else{
                console.log("YouTube Failed");
            }
        });
    });
});

//console.log(apis.youtube.playerInfo.player);

//need to find a way to get the input to register when a video is alredy present
//dom create a button to switch videos

var deleteB = $('<button>', {
    type: "button",
    class: "btn btn-info",
    text: "Next"
});

var test=$('.row').append(deleteB);

