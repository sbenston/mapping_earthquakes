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
    Satellite: satelliteStreets
};

// Create map object with a center and zoom level
let map = L.map('mapid', {
    center: [
        39.5, -98.5
    ],
    zoom: 3,
    layers: [streets]
});

// Pass map layers into layers control
L.control.layers(baseMaps).addTo(map);

// GeoJSON URL
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing GeoJSON data
d3.json(earthquakeData).then(function(data) {

    // Function that returns style data for each earthquake plotted
    // Magnitude is used to calculate circle radius with a function
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: "#ffae42",
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    // Determines radius of earthquake markers
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }

        return magnitude * 4;
    }

    // Add GeoJSON layer
    L.geoJson(data, {
        
        // Turn each feature to circleMarkers
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        },
    }).addTo(map);
});
