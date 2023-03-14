const { Router } = require('express');
const {API_KEY} = process.env;
const axios = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/get', async (req, res) => {

    try {
        const allCharacters = await axios(`https://api.rawg.io/api/games?key=27f8cfa1683d4226939e9799677d7b15`);
          return res.json(allCharacters);
    } catch (error) {
          return res.json(error);
        }
})


module.exports = router;
