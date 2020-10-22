const express = require('express');
const weather = require('openweather-apis');

const api = express();

api.get('/weather', (req, res) => {
    weather.setAPPID("a598cc411a45e35599951aa01f01ba40");
    weather.setLang('en');
    weather.setCity('Skopje');
    // weather.getTemperature(function(err, temp){
    //     if(err) {
    //         return res.status(500).send('Internal server error');
    //     }
    //     return res.status(200).send(temp + ' stepeni');
    // });
    weather.getAllWeather((err, data) => {
        if(err) {
            return res.status(500).send('Internal server error');
        }
        return res.status(200).send(data);
    });
});

api.listen(8001, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Server started on port 8001');
});