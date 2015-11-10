//Flickr related code only!


$(document).ready(function() {
    $('.btn-info').on('click', function() {
        clearBox();
        getFlickr();
    });
    $('#flicker-section img').on('click', function() {
        popupImage();
    });
});

var flickrData;

// Get Flickr photos via API call and append to #flicker-section DOM
function getFlickr() {

    var keyWord = $("input").val();
    apis.flickr.getData(keyWord, 5, function (success, resp) {
        if(success) {
            $("#flicker-section").append("<br>");
            flickrData = resp;
            //remove below when done
            console.log("Flickr:", success, resp);

            // Loop to append images to #flicker-section div
            for (var i=0; i<flickrData.photos.photo.length; i++) {
                var img = $("<img>", {
                    src: flickrData.urls[i]
                });
                var linkImg = $("<a>", {
                    href: flickrData.urls[i]
                    //target: "_blank"
                }).attr("data-toggle","modal");
                linkImg.append(img);
                $("#flicker-section").append(linkImg);
            }
        }
        else {
            console.log("Flickr failed");
        }
    });
}

// Clear DOM contents prior to populating data
function clearBox() {
    $("#flicker-section").empty();
    $("#flicker-section").text("Flickr");
}

function popupImage() {

}