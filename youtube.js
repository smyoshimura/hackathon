//pulling video from youtube and playing
$(document).ready(function () {

    $('#search-button').click(function () {
        //console.log("clicked");
        var searchInput=$('input').val();
        console.log(searchInput);
        apis.youtube.getData(searchInput,2, function(success, response){
            if(success) {
                console.log(response);
                apis.youtube.playVideo(response.video[0].id, '65%', '63%');
                setTimeout(function () {
                    apis.youtube.stopVideo()
                }, 20000);
            }else{
                console.log("YouTube Failed");
            }
        });
    })
});

//console.log(apis.youtube.playerInfo.player);