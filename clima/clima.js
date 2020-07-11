const axios = require('axios');

const apiKey = 'd5ad80df479c84a62044d947afffc78f';

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);

    const data = resp.data;

    const temp = data.main.temp;
    const minTemp = data.main.temp_min;
    const maxTemp = data.main.temp_max;

    return {
        temp,
        minTemp,
        maxTemp
    }

}


module.exports = {
    getClima
}