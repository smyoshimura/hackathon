//TODO make a category for itunes api, and based off the search results.. whatever you click, another ajax request goes down and then your modal pops ups
//pulling video from youtube and playing
$(document).ready(function () {
    $('#search-button').click(function () {
        if (document.getElementsByTagName('iframe')) {
            $('iframe').replaceWith('<div id="player"></div>');
            var searchInput = $('input').val();                                                                //storing the input value in the search bar into searchInput variable
            //checking to see if input is stored properly
            apis.youtube.getData(searchInput, 20, function (success, response) {                                //using created getData function with searchInput, 2, and a callback function as parameters
                if (success) {                                                                                 //if data is retrieved and stored, call the playVideo function; currently, only accesses index 0
                    apis.youtube.playVideo(response.video[0].id, 300, 450);
                    youtubeArray = response.video;
                    y = 0;
                    onYouTubeIframeAPIReady();
                } else {
                    console.log("YouTube Failed");                                                             //if success is false, console will notify failure
                }
            });
        }
    });
});