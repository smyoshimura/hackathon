$(function(){
    $('select').change(function(){//on select of genre,, loop through i-array and grab the code, stick in url and run the itunes get function
        var itunesArray = [{genre: 'Comedy', code: 4404}, {genre: 'Action & Adventure', code: 4401}];
        var curGenre = $('.option:selected').text();
        var curCode;
        var url;
        for(var x = 0; x<itunesArray.length; x++){
            if(itunesArray[x].genre === curGenre){
                curCode = itunesArray[x].code;
                url = 'https://itunes.apple.com/us/rss/topmovies/limit=10/genre=' + curCode + '/json';
            }
        }
        getFromItunes(url);
    });
});

function getFromItunes(url){
    var img;
    var link;
    var col;
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(result) {
            for(var i =0; i<result.feed.entry.length;i++){
                col = $('<div>').addClass('col-xs-2');
                link = result.feed.entry[i]['im:image'][2].label;
                img = $('<img>').attr('src', link);
                col.append(img);
                $('#itunes-results').append(col);
            }
        }
    });
}





