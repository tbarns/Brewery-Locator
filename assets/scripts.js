var searchBar = document.querySelector("#search-form");
var city;
var beer = document.querySelector("#save-your-brews");
var saveButton = document.querySelector("#save-button");


function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: new google.maps.LatLng(38.685516, -101.073324),
        mapTypeId: "terrain",
        gestureHandling: "cooperative",
    });

}
// Create a <script> tag and set the USGS URL as the source.
function getCity(city) {
    var city = $("#search-form").val()
    var requestUrl = `https://api.openbrewerydb.org/breweries?by_city=${city}`;
    console.log(city)
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // Loop through the results array and place a marker for each
            // set of coordinates.
            // const eqfeed_callback = function (results) 

            for (let i = 0; i < data.length; i++) {
                var lat = data[i].latitude
                var lon = data[i].longitude
                var street = data[i].street
                var name = data[i].name
                var type = data[i].brewery_type
                // const coords = results.features[i].geometry.coordinates;
                const latLng = new google.maps.LatLng(lat, lon);
                // console.log(lat)
                // console.log(lon)
                var streetDisplay = $("<p>").append("Street location: ", street)
                var nameLocal = $("<p>").append("Name: ", name)
                var brewType = $("<p>").append("Type: ", type)


                // $("#searchResults").empty()
                $("#searchResults").append(nameLocal);
                $("#searchResults").append(brewType);
                $("#searchResults").append(streetDisplay);

                new google.maps.Marker({
                    position: latLng,
                    map: map,
                });

            };

        });
}


saveButton.addEventListener("click", function () {

    // Add favorite beers to local storage
    var beerName = beer.value;
    console.log(beerName)



    $(function () {
        clickCount = + 0;

        $('#save-button').click(function () {
            ++clickCount;
            localStorage.setItem(clickCount, beerName);
        });
    });
    $("#userInput").val(localStorage.getItem("clickCount"))

    //add code here to render to page
    var beerDisplayEl = $("<div>").append(beerName)
    $("#saved-brews").append(beerDisplayEl);

}


);

//allows pulls beeers to be rendered via local storage amd persist on the page after refresh
$("#userInput1").append(localStorage.getItem("1"))
$("#userInput2").append(localStorage.getItem("2"))
$("#userInput3").append(localStorage.getItem("3"))
$("#userInput4").append(localStorage.getItem("4"))
$("#userInput5").append(localStorage.getItem("5"))
$("#userInput6").append(localStorage.getItem("6"))
$("#userInput7").append(localStorage.getItem("7"))
$("#userInput8").append(localStorage.getItem("8"))
$("#userInput9").append(localStorage.getItem("9"))
$("#userInput10").append(localStorage.getItem("10"))


$("#clear").click(function () {
    $("#searchResults").empty();
})

window.initMap = initMap;

$("#beer-me-bro").on("click", getCity)

