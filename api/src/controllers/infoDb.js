const { Videogame, Genero } = require('../db');
const axios = require('axios');

const gamesDb = async () => {
    return await Videogame.findAll({
        include: {
            model: Genero,
            attributes: ['name'],
            through: { attributes: [] }
        }
    }); 
}


module.exports = gamesDb;