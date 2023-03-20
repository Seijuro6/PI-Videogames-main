const axios = require('axios');
const { gamesApi } = require('./infoApi')
const { gamesDb, genresDb, gamesCreateDb } = require('./infoDb')


const getAllVideogames = async (idVideogame) => {
    const infoApi = await gamesApi(idVideogame);
    const infoDb = await gamesDb(idVideogame);
    const allVideogames = infoApi.concat(infoDb);
    if (allVideogames == 0){
        throw Error(error )
    }
    return allVideogames;
}

const getGeneros = async () => {
    const infoApi = await genresDb();
    return infoApi;
}

const postVideogames = async (body) => {
    const postDb = await gamesCreateDb(body);
    return postDb

}

module.exports = {
    getAllVideogames,
    getGeneros,
    postVideogames,
}