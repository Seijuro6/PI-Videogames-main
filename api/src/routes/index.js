const { Router } = require('express');
const router = Router();
const morgan = require('morgan');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogamesRouter');
const generosRouter = require('./generosRouter');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use(morgan('dev')); 

// router.get('/videogames/name', videogamesRouter);
// router.get('/videogames/:idVideoGame', videogamesRouter);
// router.post('/videogames', videogamesRouter);
// router.get('/genres', generosRouter);
// router.get('/videogames/name', async (req, res) => {
//     try {
//       const name = req.query.name;
//       const videogames = await getAllVideogames(name);
//       const filteredVideogames = videogames.filter(videogame => videogame.name.toLowerCase().includes(name.toLowerCase()));
//       res.status(200).send(filteredVideogames);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  

module.exports = router;
