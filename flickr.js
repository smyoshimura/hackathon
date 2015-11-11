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
    var keyWord = $("input").val();
    var numPhotos = 5;

    if (keyWord !== "") {
        apis.flickr.getData(keyWord, numPhotos, function (success, resp) {
            if (success) {
                $("#flickr-section").append("<br>");
                flickrData = resp;

                // Loop to append images to #flicker-section div
                for (var i = 0; i < flickrData.photos.photo.length; i++) {
                    var img = $("<img>", {
                        src: flickrData.urls[i]
                    });
                    //var linkImg = $("<a>", {
                    //    href: flickrData.urls[i],
                    //    target: "_blank"
                    //}).attr("data-toggle", "modal").attr("data-target", "#flickr-modal");
                    //
                    //linkImg.append(img);
                    //$("#flickr-section").append(linkImg);

                    var linkA = $("<a>").attr("href","#flickr-modal").attr("data-toggle", "modal");
                    var modalA = linkA.append(img);
                    var modalList = $("<li>").append(modalA);
                    $("ul.nav").append(modalList);
                    console.log(modalList);

                }
            }
            else {
                console.log("Flickr failed");
            }
        });
    }
    else {
        $("#flickr-section").text("Nothing entered. Search something!");
    }
}

// Clear DOM contents prior to populating data
function clearBox() {
    $("ul.nav").empty();
   // $("#flickr-section").text("Flickr");
}
