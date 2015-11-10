//Flickr related code only!

$(document).ready(function() {
   // $('.btn-info').on('click', (clearBox));
    $('.btn-info').on('click', (getFlickr));
});

// Get Flickr pictures via API call
function getFlickr() {
    var flickrData;
    var keyWord = $("input").val();

    apis.flickr.getData(keyWord, 5, function (success, resp) {
        if(success) {
            $("#flicker-section").append("<br>");
            flickrData = resp;
            console.log("Flickr:", success, resp);

            for (var i=0; i<flickrData.photos.photo.length; i++) {
                var img = $("<img>", {
                    src: resp.urls[i],
                    height: "100",
                    width: "100"
                });
                $("#flicker-section").append(img);
            }
        }
        else {
            console.log("Flickr failed");
        }
    });
}

function clearBox() {
    $("#flicker-section").replaceWith("");
}