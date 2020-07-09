const http = require('http');
const utils = require('../02-weather-app/utils/utils');

const weatherStackKey = utils.getKeysAndTokens().weatherStackKey;
const url = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=45,-75&units=m`;

let countData = 0; // To count the times data chunk is arrived
const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        console.log(countData++);
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();