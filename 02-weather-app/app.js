const request = require('postman-request');
const utils = require('./utils')

// Get ALL the keys and Tokens
const keysAndTokens = utils.getKeysAndTokens();

// const weatherStackKey = keysAndTokens.weatherStackKey;
// const url = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=37.8267,-122.4233&units=m`;

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log(`ERROR!! -> ${response.body.error.info}`);
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}ºC out. It feels like ${response.body.current.feelslike}ºC out`);
//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather
const mapBoxToken = keysAndTokens.mapBoxToken;
const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoibXJiaXR3aXNlIiwiYSI6ImNrYzhoZjY4bjFibWIzMXJpaGVzZmEyM28ifQ.G_-JB5B-xBYq65bZ0JKFVw&limit=1`;

request({ url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try again with different search terms!');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
})