// Check to see if code is working
console.log("working");

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Dark view tile layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create base layer that holds both maps
let baseMaps = {
    Streets: streets,
    "Satellite Streets": satelliteStreets
};

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        43.7, -79.3
    ],
    zoom: 11,
    layers: [streets]
});

// Pass map layers into layers control
L.control.layers(baseMaps).addTo(map);

// GeoJSON URL
let airportData = "https://raw.githubusercontent.com/sbenston/mapping_earthquakes/Mapping_GeoJSON_Points/majorAirports.json";
let routeData = "https://raw.githubusercontent.com/sbenston/mapping_earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";
let neighborhoodData = "https://raw.githubusercontent.com/sbenston/mapping_earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// Line style
let myStyle = {
    color: "blue",
    fillColor: "#ffffa1",
    weight: 1
};

// Grabbing GeoJSON data
d3.json(neighborhoodData).then(function(data) {
    console.log(data);
    // Add GeoJSON layer
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3> Neighborhood: ${feature.properties.AREA_NAME} </h3>`)
        }
    }).addTo(map);
});
