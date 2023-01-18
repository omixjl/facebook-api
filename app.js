const request = require('request');
const express = require('express');
const app = express();


const access_token = 'EAAMUxxxxxx';
const page_id = '197xxxxxx'; 
let message = 'Test 3';
let image = 'https://pics.filmaffinity.com/Hello_World-314069290-large.jpg';


const options = {
    method: 'POST',
    url: `https://graph.facebook.com/${page_id}/photos`,
    qs: {
        access_token: access_token,
        message: message,
        url: image
    }
};

request(options, function (error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(response.statusCode);
        console.log(body);
    }
});


/*
app.post('/publish', (req, res) => {
    const options = {
        method: 'POST',
        url: `https://graph.facebook.com/${page_id}/photos`,
        qs: {
            access_token: access_token,
            message: message,
            url: image
        }
    };

   request(options, function (error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(response.statusCode);
        console.log(body);
    }
});
*/
