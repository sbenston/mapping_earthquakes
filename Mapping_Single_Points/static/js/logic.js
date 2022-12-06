// Check to see if code is working
console.log("working");

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        34.0552, -118.2437
    ],
    zoom: 14
});

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add layer to the map
streets.addTo(map);

// Add marker for Los Angeles, California
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: '#000000',
    fillColor: '#ffffa1'
}).addTo(map);