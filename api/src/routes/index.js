const { Router } = require('express');
const router = Router();
const morgan = require('morgan');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllVideogames, getGeneros, postVideogames } = require('../controllers/index.js');
const { API_KEY } = process.env;
const { Videogame, Genero } = require('../db')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use(morgan('dev'));

router.get('/videogames/:idVideogame', async (req, res) => {
    const { idVideogame } = req.params;
    try {
        if (!idVideogame) {
            res.status(400).json({ error: 'Debe ingresar el id' });
        } else {
            let videogameId = await getAllVideogames(idVideogame);
            console.log(videogameId)
            videogameId.length > 0 ?
                res.status(200).json(videogameId) :
                res.status(404).json({ error: 'No se encontró un videojuego con el id especificado' });
        }
    } catch (error) {
        res.status(404).json({ error: "No existe ningun juego con ese Id" })
    }
})

router.get('/videogames', async (req, res) => {
    const name = req.query.name
    let gamesTotal = await getAllVideogames(name)
    try {
        if (name) {
            let gameName = await gamesTotal.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()));
            characters.length ?
                res.status(200).send(gameName) :
                res.status(404).send('No esta el juego solicitado')
        } else {
            res.status(200).send(gamesTotal);
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.get('/genres', async (req, res) => {
    try {
        let genres = await getGeneros();
        res.status(200).send(genres);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})


router.post('/videogames', async (req, res) => {
    const { Nombre, Descripcion, Plataformas, Imagen, FechaDeLanzamiento, Rating, Generos } = req.body;
    const body = req.body;
    try {
        if (!Nombre || !Plataformas || !Imagen || !FechaDeLanzamiento || !Rating) {
            res.status(400).json({ error: 'Debe ingresar todos los campos' });
        }
        const newGame = await postVideogames(body)
        res.status(200).send('Videojuego creado correctamente');

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;
