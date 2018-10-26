var gifyAPI; 
var userSearchInput = [] ;



//KNOWN BUGS:
//BUTTONS VALUES GET OVERWRITTEN BY NEWEST MADE BUTTON
//NEED TO STORE LOCAL MEMORY


//BUGS COME FROM userSearchInput




function createButton(){
    var newButton = $("<button>"+userSearchInput+"</button>").attr("class","addedGifButton");
    $(".addedGifButton").attr("value",userSearchInput);
    $("#newButtonSpot").append($(newButton));    

};


$("#add-search").on("click",function(){
    userSearchInput= $("#userEntry").val();
    createButton();
    
})

$(document).on("click", ".addedGifButton", function(){

    var gifDiv = $("#imagesGoHere").empty();
    userSearchInput = $("#userEntry").val();
    

    gifyAPI  = "https://api.giphy.com/v1/gifs/search?q="+userSearchInput+"&api_key=qr9eTBdtXgyT0eIUBLPwKsSA5IvgDtxF&limit=15";
    $.ajax({
        url: gifyAPI,
        method:"GET"
    }).then(function(response){
        console.log(response);
    
       
        for (var i = 0; i < response.data.length; i++){
            var results= response.data[i];
            var gifandratingHolder=$("<div>").attr("id", "holdsGifsAndRating");
            var gifHolder = $("<img>").attr("src", results.images.fixed_height.url);
            gifHolder.attr("style" ,"width:200px;height:180px;")
            var ratingText = $("<p>").text("Rating: "+results.rating)
            gifandratingHolder.append(ratingText);
            gifandratingHolder.append(gifHolder);
            gifDiv.append(gifandratingHolder);


         }
   })




})