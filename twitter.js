
//Twitter related code only!
//
//twitter: {
//    getData: function(search, callback){
//        this.errors = [];
//
//        if(typeof search != "string"){
//            this.errors.push("'Search' must be a string, you gave a " + typeof search);
//        }
//
//        if(typeof callback != "undefined" && typeof callback != "function"){
//            this.errors.push("'Callback' must be a function, you gave a " + typeof callback);
//        }
//
//        if(this.errors.length > 0){
//            console.log("There were errors with your request:", this.errors);
//            return this.errors;
//        }else {
//            var data = {search_term: search};
//            var url = "http://s-apis.learningfuze.com/hackathon/twitter/index.php";
//            apis.ajax(data, url, callback);
//        }
//    },
//    errors: []
//
//},
function twitterCallback(response){
    console.log(response);
}
$(function(){
    $('button').click(function(){
        var search = $('input').val();
        apis.twitter.getData(search, twitterCallback);
    });
});
