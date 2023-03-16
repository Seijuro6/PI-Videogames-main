const axios = require('axios');
require ('dotenv').config();
const {API_KEY} = process.env;

const gamesApi = async () =>{
    const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const games = await axios.get(url);
    const info = await games.results.map(ele => {
        return {
            nombre: ele.name,
            plataformas: ele.platforms.map(ele => ele.name),
            imagen: ele.background_image,
            fechaDeLanzamiento: ele.released,
            rating: ele.rating,
            id: ele.id
        }
    }) ;
    return gamesApi;
}


module.exports = gamesApi;