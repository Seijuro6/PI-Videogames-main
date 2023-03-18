const axios = require('axios');
const {gamesApi} = require('./infoApi')
const {gamesDb, genresDb} = require('./infoDb')


const  getAllVideogames = async () => {
    const infoApi = await gamesApi();
    const infoDb = await gamesDb();
    const allVideogames = infoApi.concat(infoDb);
    return allVideogames;
}

const getVideogamesById = () => {

}
const getGeneros = async() => {
    const infoApi = await genresDb();
    return infoApi;
   
    
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
    getVideogamesById,
    getGeneros,
    postVideogame,
}