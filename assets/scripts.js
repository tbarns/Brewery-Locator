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


            //     for (var i = 0; i < data.length; i++) {
            //     }

        });
}



function displaySavedBrews(type) {
    document.querySelector("#saved-brews").textContent = beer;
    document.querySelector("#saved-brews").setAttribute("class", type);
}



saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Add favorite beers to local storage
    var beerName = beer.value;
    console.log(beerName)
    localStorage.setItem("beerName", beerName);
    renderFavoriteBeers();
    function renderFavoriteBeers() {
        var beer = localStorage.getItem("beerName");
        if (!beerName) {
            return;
        }
        beer.textContent = beer;
    }

});



$("#clear").click(function () {
    $("#searchResults").empty();
})


window.initMap = initMap;
// window.eqfeed_callback = eqfeed_callback;

$("#beer-me-bro").on("click", getCity)


// making this update to test github 
// map API information 
// map api key: AIzaSyAIWdiPqlsIKpfw96cOAE4EwH5PVcoU63o