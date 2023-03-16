const videogamesRouter = require('express').Router();
const { getAllVideogames, getVideogamesByName, getVideogamesById, postVideogame} = require('../controllers/index');

videogamesRouter.get('/', async (req, res)=>{
    const name = req.query.name
    let gamesTotal = await getAllVideogames(name)
    try {
        if(name){
            let gameName = await gamesTotal.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()));
            characters.length?
            res.status(200).send(gameName):
            res.status(404).send('No esta el juego solicitado')
        }else{
            res.status(200).send(gamesTotal);
         }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




videogamesRouter.get('/games/:idVideogame', async (req, res) => {
    const name = req.query.name;
    let videogames = await getAllVideogames ();

});


module.exports = videogamesRouter;

