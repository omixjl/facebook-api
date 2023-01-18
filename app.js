const request = require('request');
const express = require('express');
const app = express();


const access_token = 'EAAMUWhP2PyQBAIlMOE13ZA1ktRB5XRQ82uy4hUSCTGA14IWUr7j9ZCMQDjRiDZBty3ZBCh9jqbOSUj4wJ1XDhjasR3XYgZCgkCsnEJOuCKHdUYHMg8WZBFsMdZCYCsPQ7yZCLJZBpvquIv19gGH30ttM2EyubzZAFZA6ygRxdOHhBoi4HpKdeCBwW9zW9Spp47B058Hwe70HRhhAQZDZD';
const page_id = '1979217112364072'; 
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
