var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector ('#search-input').value; 
    var formatInputVal = document.querySelector("#format-input").value

    if (!searchInputVal) {
        console.error('Please enter your search!');
        return;
    }
}

// fetch api for brewery
function getApi() {
    var requestUrl = 'https://api.openbrewerydb.org/breweries';
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
searchFormEl.addEventListener('beer-me-bro', handleSearchFormSubmit);

// making this update to test github 
// map API information
var map = new google.maps.Map(mapCanvas, mapOptions);
new google.maps.Map(HTMLElement,MapOptions)

var mapOptions = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:7,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };