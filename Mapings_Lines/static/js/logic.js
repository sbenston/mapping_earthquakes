// Check to see if code is working
console.log("working");

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        37.1733, -90.1794
    ],
    zoom: 4
});

// Coordinates for each point on the line
let line = [
    [37.6214, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add layer to the map
streets.addTo(map);

// Create polyline and make line red
L.polyline(line, {
    color: "blue",
    dashArray: [5],
    weight: 4,
    opacity: 0.5
}).addTo(map);
