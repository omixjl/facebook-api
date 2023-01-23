const axios = require('axios');
const { access_token, page_id } = require('./config');

const facebookPublish = async (message, url) => {
    try {
        await axios.post(`https://graph.facebook.com/${page_id}/photos`, {
            access_token,
            message,
            url
        });
        console.log("Subido correctamente")
    }
    catch (error) {
        console.log(error);
    }
}

facebookPublish('Test Api', 'https://pics.filmaffinity.com/Hello_World-314069290-large.jpg');