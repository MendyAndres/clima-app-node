const axios = require('axios');

const getLugarLatLng = async(locate) => {

    const params = {
        auth: '757459535077004693523x6583',
        locate,
        json: '1'
    }


    const resp = await axios.get('https://geocode.xyz', { params });

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${locate}`);
    }

    const data = resp.data;
    const direccion = `${data.standard.city}, ${data.standard.countryname}`;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}