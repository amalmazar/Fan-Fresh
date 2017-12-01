function createFanPageMain() {
    $("#mainSearch").keyup(function(event) {
        if(event.keyCode == 13) {
            getArtist("#user-input-main");
            // show fanpage content
            $("#fanpage").css("display","block");
            // hide main search and logo
            $(".main-search").css("display", "none");
            //show top search and logo
            $(".top-search").css("display", "block");
        };
    });
};

function createFanPageTop() {
    $("#topSearch").keyup(function(event) {
        if(event.keyCode == 13) {
            getArtist("#user-input-top");
        };
    });
};
        
function getArtist(whichInput) {
    // Constructing a queryURL
    var artist = $(whichInput).val().trim();
    // Console.log(artist);
    
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=3ff3b259d85abca5d13695ff68bfbe51&format=json";
    
    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After data comes back from the request
    .done(function(response) {
    //  console.log(response);
    //  console.log(queryURL);
      populatePhoto("<img src=" + response.artist.image[4]['#text'] +">");
      populateName(response.artist.name);
      populateBio(response.artist.bio.content);
    });
};

function populatePhoto(imagetag) {
    $("#artistPhoto").html(imagetag);
};
function populateName(artistname) {
    $("#artistName").html(artistname);
};
function populateBio(bio) {
    $("#artistBio").html(bio);
};

// This function just toggles the color of the favorites heart icon 
$('#favorite').click(function() {
    if ($(this).find('i').html('favorite_border')) {
        $(this).find('i').html('favorite');
        $(this).find('i').css("color", "#ff404e");
    } else {
        $(this).find('i').html('favorite_border');
        $(this).find('i').css("color", "#fff");
    }
});



createFanPageMain();
createFanPageTop();

