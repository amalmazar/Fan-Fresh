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
    console.log(searches);
  
    if(searches){
        searchesSorted = Object.values(searches).sort(sortSearches);

    }
    
    console.log(searchesSorted);
    console.log(searchesSorted[0]);
    console.log(searchesSorted[1]);
    console.log(searchesSorted[2]);
    
    

});

$(document).keypress(function(event) {
    
    var clickCounter = 0;
                     
    if (event.which ==13) {

      var artistName = $("#user-input").val().trim();
        
        
        if (searches && searches[artistName]){
            clickCounter = searches[artistName].click;
        }   
          
        clickCounter++;
        
        // Uploads artist data to database
         database.ref("/search/"+artistName).set({
            name: artistName,
            click: clickCounter
    
        });

  }

});



function sortSearches (a,b) {
    
    return b.click - a.click;
    
}
