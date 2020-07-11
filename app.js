const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

let locate = argv.direccion;

//getLugarLatLng(locate)
//    .then(console.log)

//getClima(52.50134, 13.40464)
//.then(console.log)
//.catch(console.log);


const getInfo = async(dir) => {
    const { direccion, lat, lng } = await getLugarLatLng(dir);

    const { temp } = await getClima(lat, lng);

    if (temp) {
        console.log(`El clima de ${direccion} es de °${temp}C`);
    } else {
        console.log(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(locate);