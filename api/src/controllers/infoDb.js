const { Videogame, Genero } = require('../db');
const axios = require('axios');

const gamesDb = async (idVideogame) => {
    try {
        if (idVideogame ){
            return await Videogame.findByPk(idVideogame)
        }else{
            return await Videogame.findAll({
                include: {
                    model: Genero,
                    attributes: ['Nombre'],
                    through: { attributes: [] }
                }
            }); 
        } 
    } catch (error) {
        return []
    }
    
}

const genresDb = async () => {
    return await Genero.findAll()
}

let id = 1
const  gamesCreateDb= async (body) => {
    const {Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating, Generos } = body; 
    try {
        let nuevoId = "BD" + id++
        let createGame = await Videogame.create({ID:nuevoId, Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating})
        let generoDb = await Genero.findAll({where:{Nombre:Generos}});
        await createGame.addGenero(generoDb);        
        return createGame;
    } catch (error) {
       throw (error)
    }
}

module.exports = {
    gamesDb,
    genresDb,
    gamesCreateDb
};