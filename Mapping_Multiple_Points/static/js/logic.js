// Check to see if code is working
console.log("working");

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add layer to the map
streets.addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through cities and create marker for each
cityData.forEach((city) => {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        weight: 4,
        color: '#d99323'
    })
    .bindPopup(`<h2> ${city.city}, ${city.state}</h2> <hr> <h3>Population: ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
});