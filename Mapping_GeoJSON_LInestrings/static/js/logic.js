// Check to see if code is working
console.log("working");

// Create tile layer that is background of map
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Dark view tile layer
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create base layer that holds both maps
let baseMaps = {
    Night: night,
    Day: day
};

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        44.0, -80.0
    ],
    zoom: 2,
    layers: [night]
});

// Pass map layers into layers control
L.control.layers(baseMaps).addTo(map);

// GeoJSON URL
let airportData = "https://raw.githubusercontent.com/sbenston/mapping_earthquakes/Mapping_GeoJSON_Points/majorAirports.json";
let torontoData = "https://raw.githubusercontent.com/sbenston/mapping_earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Line style
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing GeoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Add GeoJSON layer
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3> Airline: ${feature.properties.airline} </h3><hr><h3> Destination: ${feature.properties.dst} </h3>`);
        }
    }).addTo(map);
});
