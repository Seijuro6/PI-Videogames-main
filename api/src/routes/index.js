const { Router } = require('express');
const router = Router();
const morgan = require('morgan');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllVideogames, getGeneros} = require('../controllers/index.js');
const {API_KEY} = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use(morgan('dev')); 

router.get('/videogames', async (req, res)=>{
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
        res.status(404).json({error: error.message})
    }
})

router.get('/genres', async(req,res) => {
  try {
    let genres = await getGeneros();
    res.status(200).send(genres);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})



// router.get('/videogames/:idVideoGame', videogamesRouter);
// router.post('/videogames', videogamesRouter);



module.exports = router;
