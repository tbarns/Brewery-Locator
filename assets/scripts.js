var searchBar = document.querySelector("#search-form")
var city= $("#search-form").val()


function initMap() {
    console.log("initMap")

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
     center: new google.maps.LatLng(2.8, -187.3),
      mapTypeId: "terrain",
   });
  
    // Create a <script> tag and set the USGS URL as the source.
  function getCity(){
    var requestUrl = `https://api.openbrewerydb.org/breweries?by_city=${city}`;
      fetch(requestUrl)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log(data)
          for (var i = 0; i < data.length; i++) {
          }
         
      }); 
}
getCity()
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

//   function getCity(city) {
//     city = $("#search-form").val()

//     var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWdiPqlsIKpfw96cOAE4EwH5PVcoU63o&callback=initMap";
//     // appendHistory(city)

//     //connects to the API to get inforation about location searched  byt the user
//     fetch(queryURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)

           

//         })
// }

$("beer-me-bro").on("click",initMap)


// making this update to test github 
// map API information 
// map api key: AIzaSyAIWdiPqlsIKpfw96cOAE4EwH5PVcoU63o