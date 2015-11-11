//Flickr related code only!

$(document).ready(function() {
    $('#search-button').on('click', function() {
        clearBox();
        getFlickr();
    });
});

// Get Flickr images via API call and append to #flickr-section DOM
function getFlickr() {
    var flickrData;
    var keyWord = $("input").val();
    // numImages sets the number of images to retrieve and display
    var numImages = 9;

    if (keyWord !== "") {
        apis.flickr.getData(keyWord, numImages, function (success, resp) {
            if (success) {
                flickrData = resp;
                $("#flickr-section").append("<br>");

                // Append images to flicker section & flickr modal/carousel
                for (var i = 0; i < flickrData.photos.photo.length; i++) {
                    var img = $("<img>", {
                        src: flickrData.urls[i]
                    });
                    var img2 = $("<img>", {
                        src: flickrData.urls[i]
                    });

                    // Append images to #flickr-section ul.nav
                    var navA = $("<a>").attr("href","#flickr-modal").attr("data-toggle", "modal").append(img);
                    var navLi = $("<li>").append(navA);
                    $("#flickr-section ul.nav").append(navLi);

                    // Append images to #flickr-modal .carousel-inner
                    if (i === 0) {
                        var itemDiv = $("<div class='item active'>").append(img2);
                        $("#flickr-modal .carousel-inner").append(itemDiv);
                    }
                    else {
                        itemDiv = $("<div class='item'>").append(img2);
                        $("#flickr-modal .carousel-inner").append(itemDiv);
                    }

                    /* Open images in new tab - Non-modal method */
                    //var linkImg = $("<a>", {
                    //    href: flickrData.urls[i],
                    //    target: "_blank"
                    //});
                    //linkImg.append(img);
                    //$("#flickr-section").append(linkImg);
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
    $("#flickr-section ul.nav").empty();
    $("#flickr-modal .carousel-inner").empty();
   // $("#flickr-section").text("Flickr");
}
