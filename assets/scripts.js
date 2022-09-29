var searchBar = document.querySelector("#search-form")
var city;
function initMap() {
    

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: new google.maps.LatLng(2.8, -187.3),
      mapTypeId: "terrain",
    });
  
    // Create a <script> tag and set the USGS URL as the source.
    const script = document.createElement("script");
  
    // This example uses a local copy of the GeoJSON stored at
    script.src =
      "https://api.openbrewerydb.org/breweries?by_city";
    document.getElementsByTagName("head")[0].appendChild(script);
}
  
  // Loop through the results array and place a marker for each
  // set of coordinates.
  const eqfeed_callback = function (results) {
    for (let i = 0; i < results.features.length; i++) {
      const coords = results.features[i].geometry.coordinates;
      const latLng = new google.maps.LatLng(coords[1], coords[0]);
  
      new google.maps.Marker({
        position: latLng,
        map: map,
      });
    }
  };
  
  window.initMap = initMap;
  window.eqfeed_callback = eqfeed_callback;

  function getCity(city) {
    city = $("#search-form").val()

    var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWdiPqlsIKpfw96cOAE4EwH5PVcoU63o&callback=initMap";
    appendHistory(city)

    //connects to the API to get inforation about location searched  byt the user
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data)

            var lon = data.coord.lon
            var lat = data.coord.lat
            fiveDay(lat, lon)

        })
}

// making this update to test github 
// map API information 
// map api key: AIzaSyAIWdiPqlsIKpfw96cOAE4EwH5PVcoU63o