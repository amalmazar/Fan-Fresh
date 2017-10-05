/* global firebase moment */

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGiMiBlS1F8j9rrmy6XmZHTHirsxKQcKg",
    authDomain: "fan-fresh.firebaseapp.com",
    databaseURL: "https://fan-fresh.firebaseio.com",
    projectId: "fan-fresh",
    storageBucket: "",
    messagingSenderId: "674216942943"
  };

  firebase.initializeApp(config);

var database = firebase.database();

var searches = {};
var searchesSorted = [];

database.ref("/search").on('value',function(snapshot) {
    searches = snapshot.val();
   
  
    if(searches){
        searchesSorted = Object.values(searches).sort(sortSearches);

    }
    
//   console.log(searchesSorted);
    
    //NEW FIREBASE FOR TOP ARTISTS
    console.log(searchesSorted[0]);
    console.log(searchesSorted[1]);
    console.log(searchesSorted[2]);
    console.log(searchesSorted[3]);
    console.log(searchesSorted[4]);
                    
    $("#first").replaceWith(searchesSorted[0].name )
    $("#second").replaceWith(searchesSorted[1].name )
    $("#third").replaceWith(searchesSorted[2].name )
    $("#fourth").replaceWith(searchesSorted[3].name )
    $("#fifth").replaceWith(searchesSorted[4].name )
    
//    updateTopArtist(searchesSorted[0].name);
    $("#current-top-artist").replaceWith(searchesSorted[0].name)
  
});

// Trying to write a function to update the top artist and make the link populate the page with that artist's info.
//function updateTopArtist(topArtist, topArtistName) {
//    
//    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + topArtist + "&api_key=3ff3b259d85abca5d13695ff68bfbe51&format=json";
//    
//    // Performing an AJAX request with the queryURL
//    $.ajax({
//      url: queryURL,
//      method: "GET"
//    })
//    // After data comes back from the request
//    .done(function(response) {
//      console.log(queryURL);
//      $("#current-top-artist").replaceWith("<a href=" + queryURL + ">" + topArtistName + "!")
//    });
//};


 //END NEW FIREBASE FOR TOP ARTISTS
    

function addSearchClicks(whichinput, whichdiv) {
    $(whichdiv).keyup(function(event) {
        
        var clickCounter = 0;
        
        if(event.keyCode == 13) {
          var artistName = $(whichinput).val().trim().toLowerCase();
           
            if (searches && searches[artistName]){
                clickCounter = searches[artistName].click;
            }   
            clickCounter++;

            // Uploads artist data to database
             database.ref("/search/"+artistName).set({
                name: artistName,
                click: clickCounter
             });
        };
        
    });
}

addSearchClicks("#user-input-main", "#mainSearch");
addSearchClicks("#user-input-top", "#topSearch");

function sortSearches (a,b) {
    
    return b.click - a.click;
    
}



//Nice to Have: create a function that pushes the current top artist to #current-top-artist and changes the href link to build a fan page for the current top artist