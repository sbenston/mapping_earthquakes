# Mapping Earthquakes

## Project Overview

Uses the JavaScript Leaflet library to display a map of earthquake data from the past seven days. The map uses 3 different tile layer styles from the MapBox API for users to choose the map display that suits their preferences for the best visual experience. Three datasets are mapped from GeoJSON objects that are set as togglable layers: all earthquakes for the past seven days, only major earthquakes that are magnitude 4.5 or higher, and the tectonic plate boundaries. Color and size are used with circle map markers to provide an visual aid to estimate the magnitude at a glance via referring to a map legend, with detailed information of the exact magnitude and location set as popups that open when clicking a marker.

The earthquake data used was sourced from the [USGS Earthquake Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and the tectonic plates from [Hugo Ahlenius's GitHub](https://github.com/fraxen/tectonicplates) with the original dataset by Peter Bird.
