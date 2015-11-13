//Flickr related code only!

$(document).ready(function() {
    $('#search-button').on('click', function() {
        clearBox();
        getFlickr();
    });
});



// Get Flickr photos via API call and append to #flicker-section DOM
function getFlickr() {
    var flickrData;
    var keyWord = searchVal;
    var numPhotos = 24;

    apis.flickr.getData(keyWord, numPhotos, function (success, resp) {
        if(success) {
        var container = $('<div>').addClass('flickr-container');
            $("#flickr-section").append(container);
            container.append("<br>");
            flickrData = resp;
            flickerArray = flickrData.urls;
            // Loop to append images to #flicker-section div
            for (var i=0; i<6; i++) {
                var img = $("<img>", {
                    src: flickrData.urls[i]
                });
                var linkImg = $("<a>", {
                    href: flickrData.urls[i],
                    target: "_blank"
                }).attr("data-toggle","modal").attr("data-target","#flickr-modal");

                linkImg.append(img);
                container.append(linkImg);
            }
            q=i;
        }
        else {
            console.log("Flickr failed");
        }
    });
}

// Clear DOM contents prior to populating data
function clearBox() {
    $("#flickr-section").empty();

}
