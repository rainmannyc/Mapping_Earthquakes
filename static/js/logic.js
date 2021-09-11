console.log("console initialized...");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([36.1733, -120.1794], 4); 

// Get data from cities.js
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [40.6413, -73.7781],
  [4.1888, 73.5286],
  [13.6900, 100.7501],  
  [55.9736, 37.4125],
  [52.3105, 4.7683],
  [78.2461, 15.4656],
  [63.9815, -22.6282]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '3,15'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);