// Check to see if code is working
console.log("working");

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Dark view tile layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        30, 30
    ],
    zoom: 2,
    layers: [streets]
});

// Pass map layers into layers control
L.control.layers(baseMaps).addTo(map);

// GeoJSON URL
let airportData = "https://raw.githubusercontent.com/sbenston/mapping_earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // Add GeoJSON layer
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3> Airport code: ${feature.properties.faa} </h3><hr><h3> Airport name: ${feature.properties.name} </h3>`);
        }
    }).addTo(map);
});
