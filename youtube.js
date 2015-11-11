//pulling video from youtube and playing
$(document).ready(function () {
    $('#search-button').click(function () {
        var searchInput = $('input').val();  //storing the input value in the search bar into searchInput variable
        console.log(searchInput);  //checking to see if input is stored properly
        apis.youtube.getData(searchInput, 2, function (success, response) {                                //using created getData function with searchInput, 2, and a callback function as parameters
            if (success) {                                                                                 //if data is retrieved and stored, call the playVideo function; currently, only accesses index 0
                console.log(response);
                apis.youtube.playVideo(response.video[0].id, 300, 450);
                setTimeout(function () {                                                                   //using a setTimeout function and calling stopVideo() at 40 seconds
                    apis.youtube.stopVideo()
                }, 40000);
            } else {
                console.log("YouTube Failed");                                                           //if success is false, console will notify failure
            }
        });
    })
});

