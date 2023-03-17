const axios = require('axios');
require ('dotenv').config();
const {API_KEY} = process.env;

const gamesApi = async () =>{
    const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const games = await axios.get(url);
    const info = await games.data.map(ele => {
        return {
            Name: ele.name,
            Plataformas: ele.platforms.map(ele => ele.name),
            Imagen: ele.background_image,
            FechaDeLanzamiento: ele.released,
            Rating: ele.rating,
            id: ele.id
        }
    }) ;
    return info;
}


module.exports = gamesApi;