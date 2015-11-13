var itunesArray;
var searchVal;
$(function(){
    //select an genere, movies pop up
    $('select').change(function(){//on select of genre,, loop through i-array and grab the code, stick in url and run the itunes get function
        var selectArray = [{genre: 'Comedy', code: 4404}, {genre: 'Action & Adventure', code: 4401}];
        var curGenre = $('.option:selected').text();
        var curCode;
        var url;
        for(var x = 0; x<selectArray.length; x++){
            if(selectArray[x].genre === curGenre){
                curCode = selectArray[x].code;
                url = 'https://itunes.apple.com/us/rss/topmovies/limit=10/genre=' + curCode + '/json';
            }
        }
        getFromItunes(url);
    });

    $('body').on('click', '.movie', function(){
            var curSrc = $(this).attr('src');

            for (var y = 0; y < itunesArray.length; y++) {
                if (curSrc === itunesArray[y]['im:image'][2].label) {
                    searchVal = itunesArray[y]['im:name'].label;
                    console.log(searchVal);
                }
            }
        console.log(searchVal);
        });

});

function getFromItunes(url){
    //make image element and give it a click handler to find the the search value for youtube, twitter, and flicker
    var img;
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(result) {
            itunesArray = result.feed.entry;

            //loop

            for(var i =0; i<result.feed.entry.length;i++){
                col = $('<div>').addClass('col-xs-2');
                link = result.feed.entry[i]['im:image'][2].label;
                img = $('<img>').attr('src', link).addClass('movie');


                col.append(img);
                $('#itunes-results').append(col);
            }
        }
    });
}





