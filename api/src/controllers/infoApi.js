const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genero } = require('../db')

const gamesApi = async (idVideogame) => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  const url1 = `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`;
  let ids
  if (idVideogame) {
    if (idVideogame.startsWith('BD')) {
      return []
    }
    try {
      const aux = await axios.get(url1)
      if (aux.data) ids = [aux.data]
      else return []
    } catch (error) {
      return []
    };
  } else {
    ids = (await axios.get(url)).data.results
  }
  const info = await ids.map(ele => {
    return {
      Nombre: ele.name,
      Plataformas: ele.platforms.map(ele => ele.platform.name),
      Imagen: ele.background_image,
      FechaDeLanzamiento: ele.released,
      Rating: ele.rating,
      Generos: ele.genres.map(ele => ele.name),
      id: ele.id
    }
  });
  return info;

}


module.exports = { 
  gamesApi,
};