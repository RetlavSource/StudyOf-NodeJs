const request = require('postman-request');
const utils = require('./utils');

// Get ALL the keys and Tokens
const keysAndTokens = utils.getKeysAndTokens();

const forecast = (latitude, longitude, callback) => {
    const weatherStackKey = keysAndTokens.weatherStackKey;
    const url = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=${latitude},${longitude}&units=m`;

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback(`Unable to find location. ${response.body.error.info}`, undefined);
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}ºC out. It feels like ${response.body.current.feelslike}ºC out`);
        }
    })
}

module.exports = forecast;