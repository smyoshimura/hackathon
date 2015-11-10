# Hackathon API DOC

## api object

### What is the api object?

> The api object is a single object that holds all four API's making it easier to retrieve data from the corresponding sites.

### How to use

>- Add the following JavaScript files to your project
    - https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js - jQuery
    - http://learning-fuze.github.io/project-apis/hackathon/api-obj.js - LF API Object
- A working example can be found <a href="http://learning-fuze.github.io/project-apis/" target="_blank">HERE</a> 

#### YouTube

>##### Retrieve the raw data from YouTube

>- To get a data object from YouTube use the `getData()` function
    - `apis.youtube.getData(...)`
- The function takes in three parameters
    - **search** 
        - string: Is the string you want to use to search YouTube
    - **count** 
        - integer: Is the number of search results you want back (recommended to keep fairly low 1-15 range)
    - **callback**
        - function: Is the function that is called after the AJAX call has completed. It will be passed two parameters: 
            - *success* - will either be true or false
            - *reponse* - will be the data object received from YouTube
                - object:
                    - success - (boolean) True or false 
                    - video - (array) of objects
                        - id - (string) The video's ID 
                        - title - (string) The video's title
        - By default (if no callback function is passed in as a parameter) The data object will just be logged out to the console
- Examples:
```JavaScript
//Standard call that will just log the data out to the console
apis.youtube.getData("snowboarding", 5);
//Using an anonymous function as a callback
apis.youtube.getData("snowboarding", 5, function(success, resp){
    if(success){
        //do stuff with resp
    }
});
```

>#### Play a video from YouTube

>- This is not the only way you can play a video you received from the YouTube API but probably the easiest...
- To create a video player and append it to your DOM use the `playVideo()` function
    - `apis.youtube.playVideo(...)`
- You must have a `div` with the id of *player* in your DOM, this is where your video will appear
- The function takes in three parameters
    - **videoId**
        - string: Is a string that you get in the data retrieved from YouTube
    - **height**
        - integer: Is the desired height of the video player
    - **width**
        - integer: Is the desired width of the video player
    - Height and width are optional, if they are not included the player will default to 390x640
        - If you want to set the dimensions of the player you must use both height and width, you can't include just one
- Example (building off the previous example)
```JavaScript
apis.youtube.getData("snowboarding", 5, function(success, resp){
    if(success){
        apis.youtube.playVideo(resp.video.id[1], 195, 320);
    }
});
```
- The above example will first use the `getData()` method to get a list of video IDs and other info about each video
- It then checks if the AJAX call was successful
- Then it uses the `playVideo()` method to append the player to the DOM and start playing the video
- After the video has been started you can programmatically stop the video by using `apis.youtube.stopVideo()`
- There are also many more built in functions in the YouTube player object that you can explore by looking in `apis.youtube.playerInfo.player`

### Vine 

>##### Retrieve the raw data from Vine

>- To get a data object from Vine use the `getData()` function
    - `apis.vine.getData(...)`
- The function takes in two parameters
    - **search** 
        - string: Is the string you want to use to search Vine
    - **callback**
        - function: Is the function that is called after the AJAX call has completed. It will be passed two parameters: 
            - *success* - will either be true or false
            - *reponse* - will be the data object received from Vine
                - object:
                    - success - (boolean) True or False
                    - vines - (array) of objects
                        - html - (string) An HTML string that creates an iframe that holds the vine
                        - title - (string) The vine's title
                        - *There are more key->value pairs in the vines object, that can be explored in the console* 
        - By default (if no callback function is passed in as a parameter) The data object will just be logged out to the console
    - There is no count variable for Vine, you will always get 15 results back
- Examples:
```JavaScript
//Standard call that will just log the data out to the console
apis.vine.getData("drake");
//Using an anonymous function as a callback
apis.vine.getData("drake", function(success, resp){
    if(success){
        //do stuff with resp
    }
});
```

### Twitter 

>##### Retrieve the raw data from Twitter

>- To get a data object from Twitter use the `getData()` function
    - `apis.twitter.getData(...)`
- The function takes in two parameters
    - **search** 
        - string: Is the string you want to use to search Twitter
    - **callback**
        - function: Is the function that is called after the AJAX call has completed. It will be passed two parameters: 
            - *success* - will either be true or false
            - *reponse* - will be the data object received from Twitter
                - object:
                    - tweets - (object)
                        - search_metadata - (object)
                        - statuses - (array) of objects
                            - text - (string) The string that contains the tweet
                - *The tweets object contains many other key->value pairs that can be explored in the console*
        - By default (if no callback function is passed in as a parameter) The data object will just be logged out to the console
    - There is no count variable for Twitter, you will always get 15 results back
- Examples:
```JavaScript
//Standard call that will just log the data out to the console
apis.twitter.getData("drake");
//Using an anonymous function as a callback
apis.twitter.getData("drake", function(success, resp){
    if(success){
        //do stuff with resp
    }
});
```

### Flickr

>##### Retrieve the raw data from Flickr

>- To get a data object from YouTube use the `getData()` function
    - `apis.flickr.getData(...)`
- The function takes in three parameters
    - **search** 
        - string: Is the string you want to use to search flickr
    - **count** 
        - integer: Is the number of search results you want back (recommended to use 100 or less)
    - **callback**
        - function: Is the function that is called after the AJAX call has completed. It will be passed two parameters: 
            - *success* - will either be true or false
            - *reponse* - will be the data object received from Flickr
                - object:
                    - photos - (object)
                        - photo - (array) of objects
                            - Contains data related to each photo
                    - stat - (string) "ok" means the call was successful
                    - urls - (array) of strings
                        - The URL address for each picture that can be added to an img tags src attribute
        - By default (if no callback function is passed in as a parameter) The data object will just be logged out to the console
- Examples:
```JavaScript
//Standard call that will just log the data out to the console
apis.flickr.getData("kittens", 50);
//Using an anonymous function as a callback
apis.flickr.getData("kittens", 50, function(success, resp){
    if(success){
        //do stuff with resp
    }
});
```

## More Direct Approach

### YouTube

>- **URL:**
    - `http://s-apis.learningfuze.com/hackathon/youtube/search.php`
- **Data**
    - *q* - (string) Search term used to search YouTube
    - *maxResults* - (integer) Number of results to return in one search
- **Response**
    - *video* - (object) JS object containing an array of pertinant videos

### Vine

>- **URL:**
    - `http://s-apis.learningfuze.com/hackathon/vine/index.php`
- **Data**
    - *search_term* - (string) Search term to search Vines
- **Response**
    - *vines* - (object) JS object containing an array of pertinent Vines
    - 15 results will be returned

### Twitter

>- **URL**
    - `http://s-apis.learningfuze.com/hackathon/twitter/index.php`
- **Data**
    - *search_term* - (string) search term to search Twitter
- **Response**
    - tweets - (object) JS object containing an array of pertinent tweets
    - 15 results will be returned

### Flickr

>- **URL**
    - `http://s-apis.learningfuze.com/hackathon/flickr/search.php`
- **Data**
    - *query* - (string) search term to search Flickr
    - *maxResults* - (integer) Number of results to return in one search
- **Response**
    - (object) with one array and one object
        - urls - (array) An array of image urls from your search
        - raw - (object) The original raw data from flickr
