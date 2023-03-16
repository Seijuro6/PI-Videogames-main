const axios = require('axios');
const gamesApi = require('./infoApi')
const gamesDb = require('./infoDb')


const  getAllVideogames = async () => {
    const infoApi = await gamesApi();
    const infoDb = await gamesDb();
    const allVideogames = infoApi.concat(infoDb);
    return allVideogames;
}

const getVideogamesByName = () => {

}

const getVideogamesById = () => {

}
const getGeneros = () => {

}
const postVideogame = () => {
    const newVideogame = {
        nombre,
        descripción,
        plataformas,
        imagen,
        fechaDeLanzamiento,
        rating
    }
    .push
}

module.exports = {
    getAllVideogames,
    getVideogamesByName,
    getVideogamesById,
    getGeneros,
    postVideogame,
}