var gifyAPI; 
var userSearchInput ;

$("#add-search").on("click",function(){
    userSearchInput= $("#userEntry").val();
    var newButton = $("<button>"+userSearchInput+"</button>").attr("id","addedGifButton");
    $("#addedGifButton").attr("value",userSearchInput);
    $("#newButtonSpot").append($(newButton));
})

$(document).on("click", "#addedGifButton", function(){

    var gifDiv = $("#imagesGoHere").empty();

    gifyAPI  = "http://api.giphy.com/v1/gifs/search?q="+userSearchInput+"&api_key=qr9eTBdtXgyT0eIUBLPwKsSA5IvgDtxF&limit=5";
    $.ajax({
        url: gifyAPI,
        method:"GET"
    }).then(function(response){
        console.log(response);
    
       
        for (var i = 0; i < response.data.length; i++){
            var results= response.data[i]
            var gifHolder = $("<img>").attr("src", results.images.fixed_height.url)
            var ratingText = $("<p>").text("Rating: "+results.rating)
            gifDiv.append(gifHolder);
            gifDiv.append(ratingText);
         }
   })




})