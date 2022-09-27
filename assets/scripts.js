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